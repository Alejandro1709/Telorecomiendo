import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import connectDB from './config/connectDB';
import HotelModel from './models/Hotel';

connectDB();

const importData = async () => {
  try {
    const hotels = JSON.parse(
      fs.readFileSync(path.join(__dirname, '/data/hotels.json'), 'utf8')
    );

    await HotelModel.insertMany(hotels);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const deleteData = async () => {
  try {
    await HotelModel.deleteMany({});

    console.log('Data Deleted!');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  deleteData();
} else {
  importData();
}
