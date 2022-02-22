"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var hotel_routes_1 = __importDefault(require("./routes/hotel.routes"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/v1/hotels', hotel_routes_1.default);
app.get('/', function (req, res) {
    res.send('Hello');
});
app.listen(2000, function () { return console.log('Server is live at: http://localhost:2000'); });
