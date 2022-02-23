import mongoose from 'mongoose';

const connectDB = () => {
  mongoose
    .connect('mongodb://localhost:27017/telorecomiendo')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
};

export default connectDB;
