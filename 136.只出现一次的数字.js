/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/* var singleNumber = function (nums) {
  return nums.find((n) => nums.indexOf(n) === nums.lastIndexOf(n));
}; */

// 更高明的按位异或解法
// n ^ n = 0, 0 ^ n = n;
var singleNumber = function (nums) {
  return nums.reduce((a, b) => a ^ b);
};
// @lc code=end
