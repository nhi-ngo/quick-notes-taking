import * as api from '../api';

export const getPosts = () => async (dispatch) => {
  try {
    const response = await api.fetchPosts();

    dispatch({ type: 'FETCH_POSTS', payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const response = await api.createPost(post);

    dispatch({ type: 'CREATE_POST', payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const response = await api.updatePost(id, post);

    dispatch({ type: 'UPDATE_POST', payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: 'DELETE_POST', payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const response = await api.likePost(id);

    dispatch({ type: 'LIKE_POST', payload: response.data });
  } catch (error) {
    console.log(error);
  }
};
