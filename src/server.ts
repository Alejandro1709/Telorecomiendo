import express, { Application, Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';

const app: Application = express();

const hotels: any[] = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../data/hotels.json'), 'utf8')
);

app.get('/', (req: Request, res: Response): void => {
  res.send(hotels);
});

app.get('/:slug', (req: Request, res: Response) => {
  let hotel = hotels.find((h) => h.hotelSlug === req.params.slug);

  if (!hotel) {
    return res.status(404).json({ message: 'Hotel Not Found!' });
  }

  res.send(hotel);
});

app.listen(2000, () => console.log('Server is live at: http://localhost:2000'));
