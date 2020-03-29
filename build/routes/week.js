"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MyDate_1 = require("../MyDate");
const dataByRange_1 = require("../dataByRange");
const express = require('express');
const router = express.Router();
const resByWeek = (startDate) => {
    const range = (new MyDate_1.default(startDate)).weekRange();
    return dataByRange_1.default(range);
};
router.get('/', (req, res) => {
    const startDate = req.query.start_date;
    const result = resByWeek(startDate);
    res.send({ data: result });
});
module.exports = router;
