type FizzBuzzValueOption = {
  value: number,
  text: string,
};

type FizzBuzzOptions = {
  values?: Array<FizzBuzzValueOption>,
  startValue?: number,
};

class FizzBuzz {
  values: Array<FizzBuzzValueOption>;
  nextValue: number;

  constructor({ values = [], startValue = 1 }: FizzBuzzOptions) {
    this.values = values;
    this.nextValue = startValue;
  }

  get(value: number): string {
    const texts: string[] = [];

    for (const valueOption of this.values) {
      if (value % valueOption.value === 0) {
        texts.push(valueOption.text);
      }
    }

    if(texts.length === 0) {
      return value.toString();
    }

    return texts.join('');
  }

  getBetween(start: number, end: number): string[] {
    const results: string[] = [];
    for(let i = start; i <= end; i++) {
      results.push(this.get(i));
    }
    return results;
  }

  next(): string {
    return this.get(this.nextValue++);
  }
}

export default FizzBuzz;
