/*
 * @lc app=leetcode.cn id=523 lang=javascript
 *
 * [523] 连续的子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  // 暴力枚举
  const len = nums.length;
  for (let i = 0; i < len - 1; i++) {
    let sum = nums[i];
    for (let j = i + 1; j < len; j++) {
      sum += nums[j];
      if ((k !== 0 && sum % k === 0) || (k === 0 && sum === 0)) {
        return true;
      }
    }
  }
  return false;
};
// @lc code=end
