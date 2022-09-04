import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema({
  title: String,
  message: String,
  name: String,
  author: String,
  selectedFile: String,
  // likeCount: {
  //   type: Number,
  //   default: 0,
  // },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
