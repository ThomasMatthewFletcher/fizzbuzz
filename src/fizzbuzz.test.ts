import { describe, expect, it } from 'vitest';
import FizzBuzz from './fizzbuzz';

describe('FizzBuzz', () => {
  it('should count normally when no values specified', () => {
    const fb = new FizzBuzz({});
    expect(fb.next()).toBe('1');
    expect(fb.next()).toBe('2');
    expect(fb.next()).toBe('3');
  });

  it('should allow starting value to be specified', () => {
    const fb = new FizzBuzz({ startValue: 100 });
    expect(fb.next()).toBe('100');
    expect(fb.next()).toBe('101');
    expect(fb.next()).toBe('102');
  });

  it('should replace the value with the text', () => {
    const fb = new FizzBuzz({ values: [{ value: 3, text: 'Fizz' }] });
    expect(fb.get(3)).toBe('Fizz');
  });

  it('should replace multiples of the value with the text', () => {
    const fb = new FizzBuzz({ values: [{ value: 3, text: 'Fizz' }], startValue: 6 });
    expect(fb.get(6)).toBe('Fizz');
  });

  it('should replace multiples of two values with the two texts', () => {
    const fb = new FizzBuzz({
      values: [
        { value: 3, text: 'Fizz' },
        { value: 5, text: 'Buzz' }
      ]
    });
    expect(fb.get(15)).toBe('FizzBuzz');
  });

  it('should get an array of results between two values', () => {
    const fb = new FizzBuzz({
      values: [
        { value: 3, text: 'Fizz' },
        { value: 5, text: 'Buzz' },
        { value: 7, text: 'Bang' }
      ]
    });

    const results = fb.getBetween(100, 110);
    const expectedResults = ['Buzz', '101', 'Fizz', '103', '104', 'FizzBuzzBang', '106', '107', 'Fizz', '109', 'Buzz'];
    expect(results).toEqual(expectedResults);
  });
});
