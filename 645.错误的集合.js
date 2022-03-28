/*
 * @lc app=leetcode.cn id=645 lang=javascript
 *
 * [645] 错误的集合
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let dup;
  const arr = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    if (arr[nums[i] - 1] > 0) {
      dup = nums[i];
    } else {
      arr[nums[i] - 1] = 1;
    }
  }
  return [dup, arr.findIndex((item) => !item) + 1];
};
// @lc code=end
