/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  const rowLen = matrix.length;
  const columnLen = matrix[0].length;
  const dp = Array.from(Array(rowLen), () => Array(columnLen).fill(0));

  // dp[i][j] 表示以(i,j)结尾的最大矩形的面积

  let maxS = 0;
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < columnLen; j++) {
      if (i + j === 0) {
        dp[i][j] = +matrix[i][j];
      } else if (i === 0) {
        // 找到边界值
        dp[i][j] = +matrix[i][j] === 0 ? 0 : dp[i][j - 1] + 1;
      } else if (j === 0) {
        // 找到边界值
        dp[i][j] = +matrix[i][j] === 0 ? 0 : dp[i - 1][j] + 1;
      } else {
        // i > 0 && j > 0
        // Todo
      }
      if (dp[i][j] > maxS) {
        maxS = dp[i][j];
      }
    }
  }
  return maxS;
};
// @lc code=end
