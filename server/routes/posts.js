import express from 'express';

import { getPosts, createPost, updatePost, deletePost, summarizePost } from '../controllers/posts.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', verifyToken, createPost);
router.patch('/:id', verifyToken, updatePost);
router.delete('/:id', verifyToken, deletePost);
router.post('/summarize', summarizePost);

export default router;
