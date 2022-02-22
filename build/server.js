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
    console.table(hotels);
    res.send(hotels);
});
app.listen(2000, function () { return console.log('Server is live at: http://localhost:2000'); });
