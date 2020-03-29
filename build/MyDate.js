"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyDate extends Date {
    constructor(props) {
        props ? super(props) : super();
        const february = this.getFullYear() % 4 !== 0 ? 28 : 29;
        this.DAYS_IN_MONTHS = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    }
    nextDay() {
        return new MyDate(new MyDate(this).setDate(this.getDate() + 1));
    }
    quarterRange() {
        let daysAmount = 0;
        const ddd = new MyDate(this);
        for (let i = 0; i < 3; i++) {
            const month = ddd.getMonth();
            daysAmount += this.DAYS_IN_MONTHS[month];
            ddd.setMonth(month + 1);
        }
        return this.range(daysAmount);
    }
    monthRange() {
        const daysAmount = this.DAYS_IN_MONTHS[this.getMonth()];
        return this.range(daysAmount);
    }
    weekRange() {
        return this.range(7);
    }
    range(n) {
        let startDate = new MyDate(this);
        return (new Array(n)).fill(this).map((el) => {
            el = startDate;
            startDate = startDate.nextDay();
            return el;
        });
    }
    equals(Obj) {
        if (typeof Obj === "string")
            Obj = new MyDate(Obj);
        return this.toString() === Obj.toString();
    }
    toString() {
        const year = this.getFullYear();
        const month = this.getMonth() + 1 < 10 ? '0' + (this.getMonth() + 1) : (this.getMonth() + 1);
        const day = this.getDate() < 10 ? '0' + this.getDate() : this.getDate();
        return `${year}-${month}-${day}`;
    }
}
exports.default = MyDate;
//# sourceMappingURL=MyDate.js.map