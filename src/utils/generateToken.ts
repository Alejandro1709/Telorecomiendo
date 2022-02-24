import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

const secret: string = process.env.JWT_SECRET as string;

console.log(secret);

const generateToken = (id: string) => {
  return jwt.sign({ id }, 'lalaperra', {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

export default generateToken;
