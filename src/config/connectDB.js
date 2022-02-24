"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var connectDB = function () {
    mongoose_1["default"]
        .connect('mongodb://localhost:27017/telorecomiendo')
        .then(function () { return console.log('Connected to MongoDB'); })["catch"](function (err) {
        console.error(err);
        process.exit(1);
    });
};
exports["default"] = connectDB;
