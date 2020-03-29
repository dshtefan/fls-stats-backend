"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataByRange_1 = require("../dataByRange");
const MyDate_1 = require("../MyDate");
const express = require('express');
const router = express.Router();
const resByMonth = (startDate) => {
    const range = (new MyDate_1.default(startDate)).monthRange();
    return dataByRange_1.default(range);
};
router.get('/', (req, res) => {
    const startDate = req.query.start_date;
    const result = resByMonth(startDate);
    res.send({ data: result });
});
module.exports = router;
