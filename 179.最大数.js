/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  nums.sort((a, b) => {
    a = a.toString();
    b = b.toString();
    return a + b < b + a ? 1 : -1;
  });
  if (nums[0] === 0) return '0'
  return nums.join('');
};
// @lc code=end
