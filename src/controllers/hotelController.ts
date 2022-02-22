import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';
import slugify from 'slugify';

const hotels: any[] = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../data/hotels.json'), 'utf8')
);

const getHotels = (req: Request, res: Response) => {
  res.send(hotels);
};

const getSingleHotel = (req: Request, res: Response) => {
  let hotel = hotels.find((h) => h.hotelSlug === req.params.slug);

  if (!hotel) {
    return res.status(404).json({ message: 'Hotel Not Found!' });
  }

  res.send(hotel);
};

const createHotel = (req: Request, res: Response) => {
  const { hotelName, hotelWebsite, hotelPrice, hotelLocation } = req.body;

  const newHotel = {
    hotelName,
    hotelWebsite,
    hotelPrice,
    hotelLocation,
    hotelSlug: slugify(hotelName).toLowerCase(),
  };

  const list = [...hotels];
  list.unshift(newHotel);

  fs.writeFileSync(
    path.join(__dirname, '../../data/hotels.json'),
    JSON.stringify(list)
  );

  res.send('Ok');
};

const updateHotel = (req: Request, res: Response) => {};

const deleteHotel = (req: Request, res: Response) => {};

export { getHotels, getSingleHotel, createHotel, updateHotel, deleteHotel };
