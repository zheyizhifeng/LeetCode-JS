/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // nums.length >= 1
  const n = nums.length;
  let slow = 0; // 不等于 0 的长度
  let fast = 0;
  while (fast < n) {
    if (nums[fast] !== 0) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }
  for (let i = slow; i < n; i++) {
      nums[i] = 0;
  }
}
// @lc code=end
