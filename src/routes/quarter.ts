import MyDate from "../MyDate";
import dataByRange from "../dataByRange";

const express = require('express');
const router = express.Router();

const resByQuarter = (startDate): any => {
    const range: Array<MyDate> = (new MyDate(startDate)).quarterRange();
    return dataByRange(range)
};

router.get('/', (req, res) => {
    const startDate: string = req.query.start_date;
    const result = resByQuarter(startDate);
    res.send({ data: result });
});

module.exports = router;
