/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // nums.length >= 1;
  let slow = 0;
  let fast = 0;
  while (fast < nums.length) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      // 维护 nums[0...slow] 无重复
      nums[slow] = nums[fast];
    } else {
      fast++;
    }
  }
  return slow + 1;
};
// @lc code=end
