import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Button } from '@material-ui/core';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deletePost, likePost } from '../../../actions/posts';
import useStyles from './styles';

export default function Post({ post, setCurrentId }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onPostDelete = () => {
    dispatch(deletePost(post._id));
  };

  const onPostLike = () => {
    dispatch(likePost(post._id));
  };

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} title={post.title} image={post.selectedFile} />

      <div className={classes.overlay}>
        <h6>{post.author}</h6>
        <p>{moment(post.createdAt).fromNow()}</p>
      </div>

      <div className={classes.overlay2}>
        <Button onClick={() => setCurrentId(post._id)}>Edit</Button>
      </div>

      <CardContent>
        <h2>{post.title}</h2>
        <p>{post.message}</p>
      </CardContent>

      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={onPostLike}>Like {post.likeCount}</Button>
        <Button size="small" color="primary" onClick={onPostDelete}>Delete</Button>
      </CardActions>
    </Card>
  );
}
