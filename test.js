const assert = require('assert');
Object.freeze(assert);
const sumOfOther = require('./sumOfOther');

describe('sumOfOther', () => {
  it('1', () => {
    const solutions = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(solutions, [8, 7, 6, 9]);
  });
  it('2', () => {
    const solutions = sumOfOther([3, 4, 2, 6, 7]);
    assert.deepEqual(solutions, [19, 18, 20, 16,15]);
  });
  
});
