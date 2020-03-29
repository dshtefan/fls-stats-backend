import {data} from "../dataByRange";

const express = require('express');
const router = express.Router();

const resByDay = (startDate): Array<any> => data.filter((el) => el.timestamp.includes(startDate));

router.get('/', (req, res) => {
    const startDate: string = req.query.start_date;
    const result = resByDay(startDate);
    res.send({ data: result });
});

module.exports = router;
