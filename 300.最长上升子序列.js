/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const len = nums.length;
  const dp = Array(len).fill(1);
  let max = 0;
  // dp[i] 表示以nums[i]结尾的最长上升序列的长度
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] = Math.max(dp[i], nums[i] > nums[j] ? dp[j] + 1 : dp[i]);
    }
    if (dp[i] > max) {
      max = dp[i];
    }
  }
  return max;
};
// @lc code=end
