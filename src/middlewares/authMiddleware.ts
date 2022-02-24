import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import UserModel from '../models/User';
import AppError from '../utils/AppError';

const protect = async (req: Request, res: Response, next: NextFunction) => {
  // get token from header
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];

    try {
      const decoded: any = jwt.verify(token, 'lalaperra');

      req.user = await UserModel.findById(decoded.id).select('-password');

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new AppError(401, 'Not authorized, token failed');
    }
  }

  if (!token) {
    res.status(401);
    throw new AppError(401, 'Not authorized, no token');
  }
};

const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(401).json({ message: 'You are not an admin' });
  }
};

export { protect, isAdmin };
