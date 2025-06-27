// @algorithm @lc id=41 lang=javascript
// @title first-missing-positive
import * as a from 'algm';
// @test([-5])=1
// @test([1,2,0])=3
// @test([3,4,-1,1])=2
// @test([7,8,9,11,12])=1
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const set = new Set();
  let max = 0;
  for (let n of nums) {
    if (n > max) max = n;
    set.add(n);
  }
  for (let i = 1; i <= max; i++) {
    if (!set.has(i)) return i;
  }
  return max === 0 ? 1 : max + 1;
};
