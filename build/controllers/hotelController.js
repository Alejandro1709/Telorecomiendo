"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteHotel = exports.updateHotel = exports.createHotel = exports.getSingleHotel = exports.getHotels = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var slugify_1 = __importDefault(require("slugify"));
var hotels = JSON.parse(fs_1.default.readFileSync(path_1.default.join(__dirname, '../../data/hotels.json'), 'utf8'));
var getHotels = function (req, res) {
    res.send(hotels);
};
exports.getHotels = getHotels;
var getSingleHotel = function (req, res) {
    var hotel = hotels.find(function (h) { return h.hotelSlug === req.params.slug; });
    if (!hotel) {
        return res.status(404).json({ message: 'Hotel Not Found!' });
    }
    res.send(hotel);
};
exports.getSingleHotel = getSingleHotel;
var createHotel = function (req, res) {
    var _a = req.body, hotelName = _a.hotelName, hotelWebsite = _a.hotelWebsite, hotelPrice = _a.hotelPrice, hotelLocation = _a.hotelLocation;
    var newHotel = {
        hotelName: hotelName,
        hotelWebsite: hotelWebsite,
        hotelPrice: hotelPrice,
        hotelLocation: hotelLocation,
        hotelSlug: (0, slugify_1.default)(hotelName).toLowerCase(),
    };
    var list = __spreadArray([], hotels, true);
    list.unshift(newHotel);
    fs_1.default.writeFileSync(path_1.default.join(__dirname, '../../data/hotels.json'), JSON.stringify(list));
    res.send('Ok');
};
exports.createHotel = createHotel;
var updateHotel = function (req, res) { };
exports.updateHotel = updateHotel;
var deleteHotel = function (req, res) { };
exports.deleteHotel = deleteHotel;
