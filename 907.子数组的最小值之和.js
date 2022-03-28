/*
 * @lc app=leetcode.cn id=907 lang=javascript
 *
 * [907] 子数组的最小值之和
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var sumSubarrayMins = function (A) {
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    let min = Infinity;
    for (let j = i; j < A.length; j++) {
      min = Math.min(min, A[j]);
      sum += min;
    }
  }
  return sum % (10 ** 9 + 7);
};
// @lc code=end
