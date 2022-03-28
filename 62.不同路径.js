/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // dp[i][j] 从(0,0)走到(i,j)的路径总数
  /*   const dp = [];
  for (let i = 0; i < n; i++) {
    dp.push(new Array(m));
    for (let j = 0; j < m; j++) {
      if (i === 0 || j === 0) {
        // 紧邻边界只有一条路径，往下或者往右
        dp[i][j] = 1;
      } else {
        dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
      }
    }
  }
  return dp[n - 1][m - 1]; */

  // 优化空间复杂度
  const dp = [1];
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (i === 0) {
        dp[j] = 1;
      } else {
        dp[j] = dp[j] + dp[j - 1];
      }
    }
    console.log(dp);
  }
  return dp[m - 1];
};
// @lc code=end
