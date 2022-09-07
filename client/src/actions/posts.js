/* eslint-disable no-console */
import * as api from '../api';
import { FETCH_POSTS, CREATE_POST, UPDATE_POST, DELETE_POST } from '../constants/actionTypes';

export const getPosts = () => async (dispatch) => {
  try {
    const response = await api.fetchPosts();

    dispatch({ type: FETCH_POSTS, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const response = await api.createPost(post);

    dispatch({ type: CREATE_POST, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const response = await api.updatePost(id, post);

    dispatch({ type: UPDATE_POST, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE_POST, payload: id });
  } catch (error) {
    console.log(error);
  }
};
