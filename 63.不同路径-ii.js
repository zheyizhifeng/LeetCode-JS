/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let row = obstacleGrid.length;
  let column = obstacleGrid[0].length;
  const dp = Array.from(new Array(row), () => new Array(column).fill(0));
  // dp[i][j] 表示从(0,0) 到达 (i,j) 的路径条数
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (obstacleGrid[i][j] === 1) {
        // (i,j)本身有障碍物，不可到达
        dp[i][j] = 0;
      } else {
        // 正常讨论
        if (i === 0 && j === 0) {
          dp[i][j] = 1;
        } else if (i === 0 && j > 0) {
          dp[i][j] = dp[i][j - 1];
        } else if (j === 0 && i > 0) {
          dp[i][j] = dp[i - 1][j];
        } else {
          dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
      }
    }
  }
  return dp[row - 1][column - 1];
};
// @lc code=end
