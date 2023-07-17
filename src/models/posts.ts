import { Schema, model, models } from 'mongoose';

const postSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  type: {
    type: String,
    required: [true, 'Please select the post privacy!'],
    enum: {
      values: ['public', 'private'],
      default: 'public',
      message: {
        type: String,
        required: 'Please select the post privacy!',
      },
    },
  },
  caption: {
    type: Text,
    required: [
      true,
      'To create a post you at least have to write the caption!',
    ],
  },
  imageUrl: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  reacts: {
    funny: {
      type: Number,
    },
    like: {
      type: Number,
    },
    love: {
      type: Number,
    },
    care: {
      type: Number,
    },
    comments: [
      {
        userId: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: 'User',
        },
        comment: {
          type: String,
          required: true,
        },
        time: {
          type: Date,
          default: Date.now(),
        },
      },
    ],
  },
});

const Post = models.Post || model('Post', postSchema);

export default Post;
