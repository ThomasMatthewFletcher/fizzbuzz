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
});
