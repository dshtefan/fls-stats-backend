class MyDate extends Date {
  DAYS_IN_MONTHS: Array<number>;

  constructor(props?) {
    props ? super(props) : super();
    const february: number = this.getFullYear() % 4 !== 0 ? 28 : 29;
    this.DAYS_IN_MONTHS = [31, february, 31, 30, 31, 30, 31, 31 ,30, 31, 30, 31];
  }


  nextDay() {
    return new MyDate(new MyDate(this).setDate(this.getDate() + 1))
}
  
  quarterRange() {
    let daysAmount: number = 0;
    const ddd = new MyDate(this);
    for (let i = 0; i < 3; i++) {
      const month: number = ddd.getMonth();
      daysAmount += this.DAYS_IN_MONTHS[month];
      ddd.setMonth(month + 1)
    }
    return this.range(daysAmount);
  }
  
  monthRange() {
    const daysAmount: number = this.DAYS_IN_MONTHS[this.getMonth()];
    return this.range(daysAmount);
  }
  
  weekRange(): Array<MyDate> {
    return this.range(7);
  }

  range(n: number): Array<MyDate> {
    let startDate = new MyDate(this);
    return (new Array(n)).fill(this).map((el: MyDate) => {
      el = startDate;
      startDate = startDate.nextDay();
      return el;
    })
  }

  equals(Obj: MyDate | string): boolean {
    if (typeof Obj === "string")
      Obj = new MyDate(Obj);

    return this.toString() === Obj.toString();
  }

  public toString(): string {
    const year = this.getFullYear();
    const month = this.getMonth() + 1 < 10 ? '0' + (this.getMonth() + 1) : (this.getMonth() + 1) ;
    const day = this.getDate() < 10 ? '0' + this.getDate() : this.getDate();
    return `${year}-${month}-${day}`;
  }
}

export default MyDate;
