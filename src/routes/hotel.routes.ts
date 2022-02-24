import { Router } from 'express';
import {
  getHotels,
  getSingleHotel,
  createHotel,
  updateHotel,
  deleteHotel,
} from '../controllers/hotelController';
import { protect, isAdmin } from '../middlewares/authMiddleware';

const router = Router();

// PUBLIC
router.get('/', getHotels);

router.get('/:slug', getSingleHotel);

// PRIVATE! ADMIN ONLY
router.post('/', protect, isAdmin, createHotel);

router.patch('/:slug', protect, isAdmin, updateHotel);

router.delete('/:slug', protect, isAdmin, deleteHotel);

export default router;
