import { Schema, model, models, Document } from 'mongoose';

interface IFriend extends Document {
  userId: Schema.Types.ObjectId;
  time: Date;
}

const FriendSchema = new Schema<IFriend>({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  time: {
    type: Date,
    default: Date.now,
  },
});

export interface IUser extends Document {
  email: {
    type: String;
    unique: true;
    required: [true, 'Email is required!'];
  };
  username: string;
  password: string;
  avatar?: {
    public_id: string;
    url: string;
  }[];
  friends?: IFriend[];
  notifications?: {
    details: string;
    time: Date;
  }[];
  created_at: Date;
}

const UserSchema = new Schema<IUser>({
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  username: {
    type: String,
    required: [true, 'Username is required!'],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      'Username invalid, it should contain 8-20 alphanumeric letters and be unique!',
    ],
  },
  password: {
    type: String,
    required: false,
    minLength: [8, 'Password must be at least 8 characters long'],
  },
  avatar: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  friends: {
    type: [FriendSchema],
    // validate: {
    // validator: function (friends: IFriend[]) {
    //   return friends.length <= 2;
    // },
    // message: 'Cant make more than 500 friends!',
    // },
  },
  notifications: [
    {
      details: {
        type: String,
        required: true,
      },
      time: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const User = models.User || model<IUser>('User', UserSchema);

export default User;
