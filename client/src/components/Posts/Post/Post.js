/* eslint-disable no-underscore-dangle */
import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import moment from 'moment';
import React from 'react';
import { useDispatch } from 'react-redux';

import { deletePost } from '../../../actions/posts';
import useStyles from './styles';

export default function Post({ post, setCurrentId }) {
	const classes = useStyles();
	const dispatch = useDispatch();
	const user = JSON.parse(localStorage.getItem('profile'));

	return (
		<Card className={classes.card}>
			<CardMedia
				className={classes.media}
				title={post.title}
				image={
					post.selectedFile ||
					'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
				}
			/>

			<div className={classes.overlay1}>
				<Typography variant='h6'>{post.name}</Typography>
				<Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
			</div>

			{(user?.userInfo?._id === post?.author || user?.userInfo?.googleUserId === post?.author) && (
				<div className={classes.overlay2}>
					<IconButton style={{ color: 'white' }} size='small' onClick={() => setCurrentId(post._id)}>
						<MoreVertIcon />
					</IconButton>
				</div>
			)}

			<Typography className={classes.title} variant='h5' gutterBottom>
				{post.title}
			</Typography>

			<CardContent>
				<Typography variant='body2' color='textSecondary' component='p'>
					{post.message}
				</Typography>
			</CardContent>

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
