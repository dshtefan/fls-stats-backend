"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MyDate_1 = require("../MyDate");
const dataByRange_1 = require("../dataByRange");
const express = require('express');
const router = express.Router();
const resByQuarter = (startDate) => {
    const range = (new MyDate_1.default(startDate)).quarterRange();
    return dataByRange_1.default(range);
};
router.get('/', (req, res) => {
    const startDate = req.query.start_date;
    const result = resByQuarter(startDate);
    res.send({ data: result });
});
module.exports = router;
