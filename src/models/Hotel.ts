import { Schema, Types, model } from 'mongoose';

interface Hotel {
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
    default: 1,
    min: 1,
    max: 5,
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
});

const HotelModel = model<Hotel>('Hotel', hotelSchema);

export default HotelModel;
