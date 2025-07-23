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
  const dp = Array(len).fill(0);
  // dp[i] 表示以 nums[i] 结尾的连续子数组最大和
  let maxSum = -Infinity;
  for (let i = 0; i < len; i++) {
    if (i === 0) {
      dp[i] = nums[i];
    } else {
      // dp[i] 有两种「选择」，要么与前面的相邻子数组连接，形成一个和更大的子数组；要么不与前面的子数组连接，自成一派，自己作为一个子数组。
      dp[i] = dp[i - 1] < 0 ? nums[i] : dp[i - 1] + nums[i];
    }
    if (dp[i] > maxSum) {
      maxSum = dp[i];
    }
  }
  return maxSum;
};
// @lc code=end
