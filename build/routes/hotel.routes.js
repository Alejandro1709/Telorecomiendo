"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var hotelController_1 = require("../controllers/hotelController");
var router = (0, express_1.Router)();
// PUBLIC
router.get('/', hotelController_1.getHotels);
router.get('/:slug', hotelController_1.getSingleHotel);
// PRIVATE! ADMIN ONLY
router.post('/', hotelController_1.createHotel);
router.patch('/:slug', hotelController_1.updateHotel);
router.delete('/:slug', hotelController_1.deleteHotel);
exports.default = router;
