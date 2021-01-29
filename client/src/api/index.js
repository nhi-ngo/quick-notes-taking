import axios from 'axios';

// url points to the backend route that returns all the posts that we currently have in the database
const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
