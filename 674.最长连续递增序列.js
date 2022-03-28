/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  const len = nums.length;
  const dp = [];
  let max = 0;
  // dp[i] 表示以nums[i]结尾的最长上升序列的长度
  for (let i = 0; i < len; i++) {
    if (i === 0) {
      dp[i] = 1;
    } else {
      dp[i] = nums[i] > nums[i - 1] ? dp[i - 1] + 1 : 1;
    }
    if (dp[i] > max) {
      max = dp[i];
    }
  }
  return max;
};
// @lc code=end
