import MyDate from "../MyDate";

const express = require('express');
const csv = require('csvtojson');
const router = express.Router();

const csvFilePath = './build/data/fls-data.csv';
let data = [];


csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => data = jsonObj);

const resByQuarter = (startDate): any => {
  const range: Array<MyDate> = (new MyDate(startDate)).quarterRange();
  return dataByRange(range)
};

const resByMonth = (startDate): any => {
  const range: Array<MyDate> = (new MyDate(startDate)).monthRange();
  return dataByRange(range)
};

const resByWeek = (startDate): Array<Array<Object>> => {
  const range: Array<MyDate> = (new MyDate(startDate)).weekRange();
  return dataByRange(range)
};

const dataByRange = (range: Array<MyDate>): Array<Array<Object>> => {
  return range
          .map((el) =>
              data.filter((dataEl) => dataEl.timestamp.includes(el)))
          .filter((el) => el.length !== 0)
};

const resByDay = (startDate): Array<any> => data.filter((el) => el.timestamp.includes(startDate));

router.get('/', (req, res, next) => {
  const range: string = req.query.range;
  const startDate: string = req.query.start_date;

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
