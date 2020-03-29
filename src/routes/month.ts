import dataByRange from "../dataByRange";
import MyDate from "../MyDate";

const express = require('express');
const router = express.Router();

const resByMonth = (startDate): any => {
    const range: Array<MyDate> = (new MyDate(startDate)).monthRange();
    return dataByRange(range)
};

router.get('/', (req, res) => {
    const startDate: string = req.query.start_date;
    const result = resByMonth(startDate);
    res.send({ data: result });
});

module.exports = router;
