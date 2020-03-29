"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MyDate_1 = require("../MyDate");
const express = require('express');
const csv = require('csvtojson');
const router = express.Router();
const csvFilePath = './build/data/fls-data.csv';
let data = [];
csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => data = jsonObj);
const resByQuarter = (startDate) => {
    const range = (new MyDate_1.default(startDate)).quarterRange();
    return dataByRange(range);
};
const resByMonth = (startDate) => {
    const range = (new MyDate_1.default(startDate)).monthRange();
    return dataByRange(range);
};
const resByWeek = (startDate) => {
    const range = (new MyDate_1.default(startDate)).weekRange();
    return dataByRange(range);
};
const dataByRange = (range) => {
    return range
        .map((el) => data.filter((dataEl) => dataEl.timestamp.includes(el)))
        .filter((el) => el.length !== 0);
};
const resByDay = (startDate) => data.filter((el) => el.timestamp.includes(startDate));
router.get('/', (req, res, next) => {
    const range = req.query.range;
    const startDate = req.query.start_date;
    let result = [];
    switch (range) {
        case 'quarter':
            result = resByQuarter(startDate);
            break;
        case 'month':
            result = resByMonth(startDate);
            break;
        case 'week':
            result = resByWeek(startDate);
            break;
        case 'day':
            result = resByDay(startDate);
            break;
        default:
            break;
    }
    res.send({ data: result });
});
module.exports = router;
//# sourceMappingURL=stats.js.map