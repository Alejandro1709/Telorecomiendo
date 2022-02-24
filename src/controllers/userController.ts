import { Request, Response, NextFunction } from 'express';
import UserModel from '../models/User';
import bcrypt from 'bcryptjs';
import AppError from '../utils/AppError';
import generateToken from '../utils/generateToken';

const login = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  try {
    let user = await UserModel.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(200).json({
        status: 'Success',
        message: "You're now a logged in!",
        token: generateToken(user._id),
      });
    } else {
      throw new AppError(401, 'Invalid Credentials');
    }
  } catch (error) {
    next(error);
  }
};

const register = async (req: Request, res: Response, next: NextFunction) => {
  const { firstName, lastName, username, email, password, country } = req.body;

  try {
    let user = await UserModel.findOne({ email });

    if (user) {
      throw new AppError(401, 'Email Already Taken');
    }

    const newUser = await UserModel.create({
      firstName,
      lastName,
      username,
      email,
      password,
      country,
    });

    res.status(201).json({
      status: 'Success',
      message: "You're now a part of this familly!",
      token: generateToken(newUser._id),
    });
  } catch (error) {
    next(error);
  }
};

const logout = () => {};

export { login, register, logout };
