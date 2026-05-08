import React from 'react';
import { Grid, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import Post from './Post/Post';

export default function Posts({ setCurrentId }) {
	const posts = useSelector((state) => state.posts);

	if (!posts) {
		return <CircularProgress />;
	}

	if (posts.length === 0) {
		return <h2>No posts yet</h2>;
	}

	return (
		<Grid container spacing={3}>
			{posts.map((post) => (
				<Grid key={post._id} item xs={12} sm={6}>
					<Post post={post} setCurrentId={setCurrentId} />
				</Grid>
			))}
		</Grid>
	);
}
