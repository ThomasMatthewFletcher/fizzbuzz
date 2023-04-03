# fizzbuzz

## Usage

First, generate a FizzBuzz instance:

```typescript
import { FizzBuzz } from '@thomasmatthewfletcher/fizzbuzz'

const fb = new FizzBuzz({
  values: [
    { value: 3, text: 'Fizz' },
    { value: 5, text: 'Buzz' }
  ]
});
```

Then use `.next()` to generate the next FizzBuzz value:

```typescript
fb.next(); // "1"
fb.next(); // "2"
fb.next(); // "Fizz"
fb.next(); // "4"
fb.next(); // "Buzz"
```

You can use `.get()` to get a specific value:

```typescript
fb.get(30); // "FizzBuzz"
```

You can use `.getBetween(start, end)` to get an array of values:

```typescript
fb.getBetween(10, 15) // ["Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]
```
