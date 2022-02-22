"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var app = (0, express_1.default)();
var hotels = JSON.parse(fs_1.default.readFileSync(path_1.default.join(__dirname, '../data/hotels.json'), 'utf8'));
app.get('/', function (req, res) {
    res.send(hotels);
});
app.get('/:slug', function (req, res) {
    var hotel = hotels.find(function (h) { return h.hotelSlug === req.params.slug; });
    if (!hotel) {
        return res.status(404).json({ message: 'Hotel Not Found!' });
    }
    res.send(hotel);
});
app.listen(2000, function () { return console.log('Server is live at: http://localhost:2000'); });
