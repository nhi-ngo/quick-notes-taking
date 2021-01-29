import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';

import { createPost } from '../../actions/posts';
import useStyles from './styles';

export default function Form() {
  const [postData, setPostData] = useState({});

  const classes = useStyles();
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost(postData));
  };

  const onInputChange = (e) => {
    setPostData(() => ({
      ...postData,
      [e.target.name]: e.target.value,
    }));
  };

  const onButtonClear = () => {

  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" className={`${classes.form} ${classes.root}`} onSubmit={onFormSubmit}>
        <Typography variant="h6">Creating a note</Typography>

        <TextField
          name="author"
          label="author"
          variant="outlined"
          fullWidth
          value={postData.author}
          onChange={onInputChange}
        />
        <TextField
          name="title"
          label="title"
          variant="outlined"
          fullWidth
          value={postData.title}
          onChange={onInputChange}
        />
        <TextField
          name="message"
          label="message"
          variant="outlined"
          fullWidth
          value={postData.message}
          onChange={onInputChange}
        />
        <TextField
          name="tags"
          label="tags"
          variant="outlined"
          fullWidth
          value={postData.tags}
          onChange={onInputChange}
        />

        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={(file) => setPostData({ ...postData, selectedFile: file.base64 })}
          />
        </div>

        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" fullWidth onClick={onButtonClear}>Clear</Button>
      </form>
    </Paper>
  );
}
