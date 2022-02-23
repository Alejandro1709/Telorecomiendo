import { Request, Response, NextFunction } from 'express';
import HotelModel from '../models/Hotel';
import AppError from '../utils/AppError';

const getHotels = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const hotels = await HotelModel.find();

    if (!hotels.length) {
      throw new AppError(404, 'There are no hotels in here...');
    }

    res
      .status(200)
      .json({ status: 'Success', results: hotels.length, data: hotels });
  } catch (error) {
    next(error);
  }
};

const getSingleHotel = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const hotel = await HotelModel.findOne({ hotelSlug: req.params.slug });

    if (!hotel) {
      throw new AppError(
        404,
        'This hotel does not exists... in this app at least.'
      );
    }

    res.status(200).json({ status: 'Success', data: hotel });
  } catch (error) {
    next(error);
  }
};

const createHotel = async (req: Request, res: Response, next: NextFunction) => {
  const { hotelName, hotelWebsite, hotelPrice, hotelLocation } = req.body;

  const hotel = new HotelModel({
    hotelName,
    hotelWebsite,
    hotelPrice,
    hotelLocation,
  });

  try {
    const savedHotel = await hotel.save();

    res.status(201).json({
      status: 'Success',
      message: 'Hotel Created Successfully',
      data: savedHotel,
    });
  } catch (error) {
    next(error);
  }
};

const updateHotel = async (req: Request, res: Response, next: NextFunction) => {
  const { hotelName, hotelWebsite, hotelPrice, hotelLocation } = req.body;

  try {
    const hotel = await HotelModel.findOneAndUpdate(
      { hotelSlug: req.params.slug },
      { hotelName, hotelWebsite, hotelPrice, hotelLocation },
      { new: true, runValidators: true }
    );

    if (!hotel) {
      throw new AppError(
        404,
        'This hotel does not exists... in this app at least.'
      );
    }

    res.status(200).json({
      status: 'Success',
      message: 'Hotel Updated Successfully',
      data: hotel,
    });
  } catch (error) {
    next(error);
  }
};

const deleteHotel = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const hotel = await HotelModel.findOneAndDelete({
      hotelSlug: req.params.slug,
    });

    if (!hotel) {
      throw new AppError(
        404,
        'This hotel does not exists... in this app at least.'
      );
    }

    res.status(200).json({
      status: 'Success',
      message: 'Hotel Deleted Successfully!',
      data: hotel,
    });
  } catch (error) {
    next(error);
  }
};

export { getHotels, getSingleHotel, createHotel, updateHotel, deleteHotel };
