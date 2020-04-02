"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const csv = require('csvtojson');
const csvFilePath = './build/data/fls-data.csv';
exports.data = [];
csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => exports.data = jsonObj);
exports.dataByRange = (range) => {
    return normalizeData(range
        .map((el) => exports.data.filter((dataEl) => dataEl.timestamp.includes(el)))
        .filter((el) => el.length !== 0));
};
const normalizeData = (data) => {
    const result = [];
    data.map((el1) => el1.map((el2) => result.push(el2)));
    return result;
};
exports.default = exports.dataByRange;
