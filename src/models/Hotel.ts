import mongoose from 'mongoose';
import { Schema, Types, model } from 'mongoose';
import slugify from 'slugify';

interface Hotel extends mongoose.Document {
  hotelName: string;
  hotelImages?: string[];
  hotelWebstie?: string;
  hotelSlug: string;
  hotelPrice: number;
  hotelLocation: string;
  hotelReviews: Types.ObjectId;
}

const hotelSchema = new Schema<Hotel>({
  hotelName: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  hotelImages: [String],
  hotelWebstie: {
    type: String,
    trim: true,
    lowercase: true,
  },
  hotelSlug: String,
  hotelPrice: {
    type: Number,
    required: true,
  },
  hotelLocation: {
    type: String,
    required: true,
    trim: true,
  },
  hotelReviews: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Review',
    },
  ],
}).pre<Hotel>('save', function (next) {
  if (!this.isModified('hotelName')) {
    next();
  }
  this.hotelSlug = slugify(this.hotelName).toLowerCase();
  next();
});

const HotelModel = model<Hotel>('Hotel', hotelSchema);

export default HotelModel;
