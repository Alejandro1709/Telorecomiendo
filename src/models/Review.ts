import { Schema, Types, model } from 'mongoose';

interface Review {
  reviewTitle: string;
  reviewBody: string;
  reviewLikes?: number;
  reviewedAt?: Date;
  reviewOwner?: Types.ObjectId;
  reviewRating?: number;
}

const reviewSchema = new Schema<Review>({
  reviewTitle: {
    type: String,
    required: true,
    trim: true,
  },
  reviewBody: {
    type: String,
    required: true,
    trim: true,
  },
  reviewLikes: {
    type: Number,
    default: 0,
    min: 1,
  },
  reviewedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  reviewOwner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  reviewRating: {
    type: Number,
    required: true,
    default: 1,
    min: 1,
    max: 5,
  },
});

const ReviewModel = model<Review>('Review', reviewSchema);

export default ReviewModel;
