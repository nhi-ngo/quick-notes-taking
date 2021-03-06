import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import { createPost, updatePost } from '../../actions/posts';
import useStyles from './styles';

export default function Form({ currentId, setCurrentId }) {
  const [postData, setPostData] = useState({ author: '', title: '', message: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((content) => content._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const onFormSubmit = (e) => {
    e.preventDefault();

    // validate form
    if (!postData) {
      return;
    }

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }

    onFormClear();
  };

  const onInputChange = (e) => {
    setPostData(() => ({
      ...postData,
      [e.target.name]: e.target.value,
    }));
  };

  const onFormClear = () => {
    setCurrentId(0);
    setPostData({ author: '', title: '', message: '', selectedFile: '' });
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" className={`${classes.form} ${classes.root}`} onSubmit={onFormSubmit}>
        <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} a Note</Typography>

        <TextField
          name="author"
          label="Author"
          variant="outlined"
          fullWidth
          value={postData.author}
          onChange={onInputChange}
          required
        />
        <TextField
          name="title"
          label="Title"
          variant="outlined"
          fullWidth
          value={postData.title}
          onChange={onInputChange}
          required
        />
        <TextField
          name="message"
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={postData.message}
          onChange={onInputChange}
          required
        />

        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={(file) => setPostData({ ...postData, selectedFile: file.base64 })}
          />
        </div>

        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>

        <Button variant="contained" color="secondary" size="large" fullWidth onClick={onFormClear}>Clear</Button>
      </form>
    </Paper>
  );
}
