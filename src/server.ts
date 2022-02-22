import express, { Application, Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';

const app: Application = express();

const hotels = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../data/hotels.json'), 'utf8')
);

app.get('/', (req: Request, res: Response) => {
  res.send(hotels);
});

app.listen(2000, () => console.log('Server is live at: http://localhost:2000'));
