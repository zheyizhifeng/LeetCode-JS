/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
/* var containsDuplicate = function (nums) {
  for (let n of nums) {
    if (nums.indexOf(n) !== nums.lastIndexOf(n)) {
      return true;
    }
  }
  return false;
}; */
var containsDuplicate = function (nums) {
  return new Set(nums).size !== nums.length;
};
// @lc code=end
