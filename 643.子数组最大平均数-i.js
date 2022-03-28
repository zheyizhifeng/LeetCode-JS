/*
 * @lc app=leetcode.cn id=643 lang=javascript
 *
 * [643] 子数组最大平均数 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let maxAverage = -Infinity;
  for (let i = 0; i + k - 1 < nums.length; i++) {
    let sum = 0;
    for (let j = i; j <= i + k - 1; j++) {
      sum += nums[j];
    }
    maxAverage = Math.max(maxAverage, sum / k);
  }
  // console.log(maxAverage);
  return maxAverage;
};
// findMaxAverage([1, 12, -5, -6, 50, 3], 4);
// findMaxAverage([0, 4, 0, 3, 2], 2);
// @lc code=end
