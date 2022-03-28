/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const len = nums.length;
  const dp = nums.slice(); // 默认最小和填充
  // dp[i] 表示以nums[i]结尾的连续子数组最大的和
  let maxSum = -Infinity;
  for (let i = 0; i < len; i++) {
    if (i === 0) {
      dp[i] = nums[i];
    } else {
      dp[i] = dp[i - 1] < 0 ? dp[i] : dp[i - 1] + dp[i];
    }
    if (dp[i] > maxSum) {
      maxSum = dp[i];
    }
  }
  return maxSum;
};
// @lc code=end
