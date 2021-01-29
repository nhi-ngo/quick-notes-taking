import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Button } from '@material-ui/core';
import moment from 'moment';

import useStyles from './styles';

export default function Post({ post }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} title={post.title} image={post.selectedFile} />

      <div className={classes.overlay}>
        <h6>{post.author}</h6>
        <p>{moment(post.createdAt).fromNow()}</p>
      </div>

      <div className={classes.overlay2}>
        <Button onClick={() => console.log('click')}>Edit</Button>
      </div>

      <div>
        {post.tags.map((tag) => `#${tag} `)}
      </div>

      <CardContent>
        <h2>{post.title}</h2>
      </CardContent>

      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary">Like {post.likeCount}</Button>
        <Button size="small" color="primary">Delete</Button>
      </CardActions>
    </Card>
  );
}
