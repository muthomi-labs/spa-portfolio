import { expect, test } from 'vitest';

function sum(a, b) {
  return a + b;
}

test('adds 10 + 2 to equal 12', () => {
  expect(sum(10, 2)).toBe(12);
});
