/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let len = triangle.length;
  const dp = Array.from(Array(len), (v, i) => Array(i + 1));
  // 定义dp[i][j] 表示到达triangle[i][j]的最短路径和
  let sumMin = Infinity;
  for (let i = 0; i < len; i++) {
    let row_i_len = triangle[i].length;
    for (let j = 0; j < row_i_len; j++) {
      if (i === 0) {
        dp[i][j] = triangle[i][j];
      } else if (j === 0) {
        dp[i][j] = dp[i - 1][j] + triangle[i][j];
      } else if (j === row_i_len - 1) {
        dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
      }
      if (i === len - 1 && dp[i][j] < sumMin) {
        sumMin = dp[i][j];
      }
    }
  }
  return sumMin;
};
// @lc code=end
