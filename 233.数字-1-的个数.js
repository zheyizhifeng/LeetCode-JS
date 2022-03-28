/*
 * @lc app=leetcode.cn id=233 lang=javascript
 *
 * [233] 数字 1 的个数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
  if (n < 0) return 0;
  const dp = new Array(n + 1).fill(0);
  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      dp[i] = 0;
    } else {
      let count_1_of_i = i.toString().split('1').length - 1;
      dp[i] = dp[i - 1] + count_1_of_i;
    }
  }
  return dp[n];
};
// @lc code=end
