"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const csv = require('csvtojson');
const csvFilePath = './build/data/fls-data.csv';
exports.data = [];
csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => exports.data = jsonObj);
exports.dataByRange = (range) => {
    return range
        .map((el) => exports.data.filter((dataEl) => dataEl.timestamp.includes(el)))
        .filter((el) => el.length !== 0);
};
exports.default = exports.dataByRange;
