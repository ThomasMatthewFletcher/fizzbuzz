type FizzBuzzValue = {
  value: number,
  text: string,
};

type FizzBuzzOptions = {
  values?: Array<FizzBuzzValue>,
  startValue?: number,
};

class FizzBuzz {
  values: Array<FizzBuzzValue>;
  nextValue: number;

  constructor({ values = [], startValue = 1 }: FizzBuzzOptions) {
    this.values = values;
    this.nextValue = startValue;
  }

  next(): string {
    const value = this.nextValue++;
    return value.toString();
  }
}

export default FizzBuzz;
