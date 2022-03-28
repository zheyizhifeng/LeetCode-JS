/*
 * @lc app=leetcode.cn id=453 lang=javascript
 *
 * [453] 最小移动次数使数组元素相等
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  return nums.reduce((a, b) => a + b) - nums.length * Math.min.apply(null, nums);
};
// @lc code=end
