import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

interface User extends mongoose.Document {
  firstName: string;
  lastName: string;
  username: string;
  profilePictureUrl?: string;
  email: string;
  password: string;
  role?: string;
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
}).pre<User>('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPasswords = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const UserModel = model<User>('User', userSchema);

export default UserModel;
