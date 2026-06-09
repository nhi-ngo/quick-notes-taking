import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import moment from 'moment';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { summarizePost } from '../../../api';

import { deletePost } from '../../../actions/posts';
import useStyles from './styles';

export default function Post({ post, setCurrentId }) {
	const classes = useStyles();
	const dispatch = useDispatch();
	const user = JSON.parse(localStorage.getItem('profile'));

	const [summary, setSummary] = useState('');
	const [loading, setLoading] = useState(false);

	const handleSummarize = async () => {
		setLoading(true);
		const { data } = await summarizePost(post.message);
		setSummary(data.summary);
		setLoading(false);
	};

	return (
		<Card className={classes.card} sx={{ maxWidth: 300 }}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					title={post.title}
					image={
						post.selectedFile ||
						'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
					}
				/>
				<CardContent>
					<Typography gutterBottom variant='h6' component='div'>
						{post.title}
					</Typography>
					<Typography variant='body2' color='textSecondary' component='p'>
						{post.message}
					</Typography>
				</CardContent>
			</CardActionArea>

			<button onClick={handleSummarize} disabled={loading}>
				{loading ? 'Summarizing...' : '✨ Summarize'}
			</button>
			{summary && (
				<Typography variant='body2' component='p' style={{ padding: '8px' }}>
					<strong>Summary:</strong> {summary}
				</Typography>
			)}

			<div className={classes.overlay1}>
				<Typography variant='h6'>{post.name}</Typography>
				<Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
			</div>

			<div className={classes.overlay2}>
				{(user?.userInfo?._id === post?.author || user?.userInfo?.googleUserId === post?.author) && (
					<IconButton style={{ color: 'white' }} size='small' onClick={() => setCurrentId(post._id)}>
						<MoreVertIcon />
					</IconButton>
				)}
			</div>

			<CardActions className={classes.cardActions}>
				{(user?.userInfo?._id === post?.author || user?.userInfo?.googleUserId === post?.author) && (
					<Button size='small' color='secondary' onClick={() => dispatch(deletePost(post._id))}>
						<DeleteIcon fontSize='small' /> Delete
					</Button>
				)}
			</CardActions>
		</Card>
	);
}
