import express, {
  Application,
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from 'express';
import connectDB from './config/connectDB';
import hotelRoutes from './routes/hotel.routes';
import userRoutes from './routes/user.routes';
import AppError from './utils/AppError';
import dotenv from 'dotenv';

const app: Application = express();

dotenv.config();

connectDB();

app.use(express.json());

app.use('/api/v1/auth', userRoutes);
app.use('/api/v1/hotels', hotelRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello');
});

app.all('*', (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(404, 'This Page Does Not Exists!!'));
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let { status = 500 } = err;

  if (!err.message) err.message = 'Oh no... There was an unexpected error.';

  res.status(status).json({ status: 'Faillure', message: err.message });
};

app.use(errorHandler);

const port = process.env.PORT || 2000;

app.listen(port, () =>
  console.log(`Server is live at: http://localhost:${port}`)
);
