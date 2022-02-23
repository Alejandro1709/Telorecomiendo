import { Request, Response, NextFunction } from 'express';
import HotelModel from '../models/Hotel';

const getHotels = async (req: Request, res: Response) => {
  try {
    const hotels = await HotelModel.find();

    if (!hotels.length) {
      return res
        .status(404)
        .json({ status: 'Failure', message: 'No Hotels Were Found!' });
    }

    res
      .status(200)
      .json({ status: 'Success', results: hotels.length, data: hotels });
  } catch (error) {
    res.status(500).json({ status: 'Failure', message: error });
  }
};

const getSingleHotel = async (req: Request, res: Response) => {
  try {
    const hotel = await HotelModel.findOne({ hotelSlug: req.params.slug });

    if (!hotel) {
      return res
        .status(404)
        .json({ status: 'Failure', message: 'Hotel Not Found!' });
    }

    res.status(200).json({ status: 'Success', data: hotel });
  } catch (error) {
    res.status(500).json({ status: 'Failure', message: error });
  }
};

const createHotel = async (req: Request, res: Response) => {
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
    res.status(500).json({ status: 'Failure', message: error });
  }
};

const updateHotel = async (req: Request, res: Response) => {
  const { hotelName, hotelWebsite, hotelPrice, hotelLocation } = req.body;

  try {
    const hotel = await HotelModel.findOneAndUpdate(
      { hotelSlug: req.params.slug },
      { hotelName, hotelWebsite, hotelPrice, hotelLocation },
      { new: true, runValidators: true }
    );

    if (!hotel) {
      return res
        .status(404)
        .json({ status: 'Failure', message: 'Hotel Not Found!' });
    }

    res.status(200).json({
      status: 'Success',
      message: 'Hotel Updated Successfully',
      data: hotel,
    });
  } catch (error) {
    res.status(500).json({ status: 'Failure', message: error });
  }
};

const deleteHotel = async (req: Request, res: Response) => {
  try {
    const hotel = await HotelModel.findOneAndDelete({
      hotelSlug: req.params.slug,
    });

    if (!hotel) {
      return res
        .status(404)
        .json({ status: 'Failure', message: 'Hotel Not Found!' });
    }

    res.status(200).json({
      status: 'Success',
      message: 'Hotel Deleted Successfully!',
      data: hotel,
    });
  } catch (error) {
    res.status(500).json({ status: 'Failure', message: error });
  }
};

export { getHotels, getSingleHotel, createHotel, updateHotel, deleteHotel };
