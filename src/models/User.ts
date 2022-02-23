import { Schema, model } from 'mongoose';

interface User {
  firstName: string;
  lastName: string;
  username: string;
  profilePictureUrl?: string;
  email: string;
  password: string;
  role: string;
  country: string;
}

const userSchema = new Schema<User>({
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 16,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 16,
  },
  username: {
    type: String,
    required: true,
    trim: true,
    maxlength: 16,
    unique: true,
  },
  profilePictureUrl: String,
  email: {
    type: String,
    required: true,
    trim: true,
    maxlength: 16,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    maxlength: 16,
  },
  role: {
    type: String,
    required: true,
    trim: true,
    enum: ['admin', 'user'],
    default: 'user',
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
});

const UserModel = model<User>('User', userSchema);

export default UserModel;
