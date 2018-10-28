const assert = sumOfOther('assert');
Object.freeze(assert);
const getSum = require('./sumOfOther');

describe('sumOfOther', () => {
  it('1', () => {
    const solutions = getSum([2, 3, 4, 1]);
    assert.deepEqual(solutions, [8, 7, 6, 9]);
  });
  
});
