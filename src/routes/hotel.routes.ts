import { Router } from 'express';
import {
  getHotels,
  getSingleHotel,
  createHotel,
  updateHotel,
  deleteHotel,
} from '../controllers/hotelController';
const router = Router();

// PUBLIC
router.get('/', getHotels);

router.get('/:slug', getSingleHotel);

// PRIVATE! ADMIN ONLY
router.post('/', createHotel);

router.patch('/:slug', updateHotel);

router.delete('/:slug', deleteHotel);

export default router;
