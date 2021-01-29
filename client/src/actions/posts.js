import * as api from '../api';

export const getPosts = () => async (dispatch) => {
  const response = await api.fetchPosts();

  dispatch({
    type: 'FETCH_POSTS',
    payload: response.data,
  });
};

export const createPost = (post) => async (dispatch) => {
  const response = await api.createPost(post);

  dispatch({
    type: 'CREATE_POST',
    payload: response.data,
  });
};
