/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const dp = [0];

  // dp[i] 表示构成和为i的完全平方数最小的个数
  for (let i = 1; i <= n; i++) {
    dp[i] = i; // 初始化为最大个数，所有正整数都可以有多个“1”组成
    for (let j = 1; j <= Math.sqrt(i); j++) {
      // 状态转移方程,
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }
  return dp[n];
};
// @lc code=end
