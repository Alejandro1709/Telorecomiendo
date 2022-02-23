import express, { Application, Request, Response, NextFunction } from 'express';
import connectDB from './config/connectDB';
import hotelRoutes from './routes/hotel.routes';

const app: Application = express();

connectDB();

app.use(express.json());

app.use('/api/v1/hotels', hotelRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello');
});

app.listen(2000, () => console.log('Server is live at: http://localhost:2000'));
