import MyDate from "./MyDate";

const csv = require('csvtojson');
const csvFilePath = './build/data/fls-data.csv';

export let data = [];

csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => data = jsonObj);

export const dataByRange = (range: Array<MyDate>): Array<Array<Object>> => {
    return normalizeData(
       range
        .map((el) =>
            data.filter((dataEl) => dataEl.timestamp.includes(el)))
        .filter((el) => el.length !== 0))
};

const normalizeData = (data: Array<Array<any>>) => {
    const result = [];
    data.map((el1) => el1.map((el2) => result.push(el2)));
    return result;
};

export default dataByRange;
