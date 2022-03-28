/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  // dp[i] 表示杨辉三角第i行
  let dp = Array.from(Array(numRows + 1), (...args) => Array(args[1]).fill(1));

  for (let i = 3; i <= numRows; i++) {
    for (let j = 0; j < i; j++) {
      if (j === 0 || j === i - 1) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
      }
    }
  }

  return dp.slice(1, numRows + 1);
};
// @lc code=end
