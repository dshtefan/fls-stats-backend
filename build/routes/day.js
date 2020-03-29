"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataByRange_1 = require("../dataByRange");
const express = require('express');
const router = express.Router();
const resByDay = (startDate) => dataByRange_1.data.filter((el) => el.timestamp.includes(startDate));
router.get('/', (req, res) => {
    const startDate = req.query.start_date;
    const result = resByDay(startDate);
    res.send({ data: result });
});
module.exports = router;
