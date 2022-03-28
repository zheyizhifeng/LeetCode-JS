// @algorithm @lc id=167 lang=javascript
// @title two-sum-ii-input-array-is-sorted
// import * as a from 'algm';
// @test([2,7,11,15],9)=[1,2]
// @test([2,3,4],6)=[1,3]
// @test([-1,0],-1)=[1,2]
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const len = numbers.length;
  let left = 0;
  let right = len - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return [];
};
