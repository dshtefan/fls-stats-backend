import MyDate from "../MyDate";
import dataByRange from "../dataByRange";

const express = require('express');
const router = express.Router();

const resByWeek = (startDate): Array<Array<Object>> => {
    const range: Array<MyDate> = (new MyDate(startDate)).weekRange();
    return dataByRange(range)
};

router.get('/', (req, res) => {
    const startDate: string = req.query.start_date;
    const result = resByWeek(startDate);
    res.send({ data: result });
});

module.exports = router;
