/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let n = grid.length;
  let m = grid[0].length;
  // 定义 dp[i][j] 表示到达(i,j)的最小和
  const dp = [];
  for (let i = 0; i < n; i++) {
    dp.push(new Array(m).fill(0));
    for (let j = 0; j < m; j++) {
      // 对于边界条件分类讨论
      if (i === 0 && j === 0) {
        dp[0][0] = grid[0][0];
      } else if (i === 0 && j > 0) {
        dp[0][j] = dp[0][j - 1] + grid[0][j];
      } else if (j === 0 && i > 0) {
        dp[i][0] = dp[i - 1][0] + grid[i][0];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j] + grid[i][j], dp[i][j - 1] + grid[i][j]);
      }
    }
  }
  return dp[n - 1][m - 1];
};
// @lc code=end
