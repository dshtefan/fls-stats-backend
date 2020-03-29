import MyDate from "./MyDate";

const csv = require('csvtojson');
const csvFilePath = './build/data/fls-data.csv';

export let data = [];

csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => data = jsonObj);

export const dataByRange = (range: Array<MyDate>): Array<Array<Object>> => {
    return range
        .map((el) =>
            data.filter((dataEl) => dataEl.timestamp.includes(el)))
        .filter((el) => el.length !== 0)
};

export default dataByRange;
