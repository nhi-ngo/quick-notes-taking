// routes logic
import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
	try {
		const postMessages = await PostMessage.find();

		res.status(200).json(postMessages);
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

export const createPost = async (req, res) => {
	const post = req.body;

	const newPost = new PostMessage({ ...post, author: req.userId, createdAt: new Date().toISOString() });

	try {
		await newPost.save();

		res.status(200).json(newPost);
	} catch (err) {
		res.status(409).json({ message: err.message });
	}
};

export const updatePost = async (req, res) => {
	const { id } = req.params;
	const { title, message, author, selectedFile, tags } = req.body;

	if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

	const updatedPost = { author, title, message, tags, selectedFile, _id: id };

	await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

	res.json(updatedPost);
};

export const deletePost = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

	await PostMessage.findByIdAndRemove(id);

	res.json({ message: 'Post deleted successfully' });
};

export const summarizePost = async (req, res, next) => {
	const { content } = req.body;

	try {
		const response = await fetch('https://api.anthropic.com/v1/messages', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'x-api-key': process.env.CLAUDE_API_KEY,
				'anthropic-version': '2023-06-01',
			},
			body: JSON.stringify({
				model: 'claude-sonnet-4-5',
				max_tokens: 200,
				messages: [
					{
						role: 'user',
						content: `Summarize this note in 2-3 sentences: ${content}`,
					},
				],
			}),
		});

		const data = await response.json();
		res.json({ summary: data.content[0].text });
	} catch (error) {
		next(error);
	}
};
