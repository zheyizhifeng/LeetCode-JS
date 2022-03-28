/*
 * @lc app=leetcode.cn id=628 lang=javascript
 *
 * [628] 三个数的最大乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  if (nums.length === 3) return nums.reduce((a, b) => a * b);
  let max1 = (max2 = max3 = -Infinity);
  let min1 = (min2 = Infinity);
  for (let c of nums) {
    if (c > max1) {
      max3 = max2;
      max2 = max1;
      max1 = c;
    } else if (c > max2) {
      max3 = max2;
      max2 = c;
    } else if (c > max3) {
      max3 = c;
    }
    if (c < min1) {
      min2 = min1;
      min1 = c;
    } else if (c < min2) {
      min2 = c;
    }
  }
  return Math.max(max1 * max2 * max3, min1 * min2 * max1);
};
// @lc code=end
