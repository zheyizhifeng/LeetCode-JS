/*
 * @lc app=leetcode.cn id=149 lang=javascript
 *
 * [149] 直线上最多的点数
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  const dp = new Array(points.length + 1);
  let max = 0
  for (let i = 0; i <= points.length; i++) {
    if (i <= 2) {
      dp[i] = i
    } else {
      points[i]
      dp[i] = 
    }
    if (dp[i] > max) {
      max = dp[i]
    }
  }
  return max
};
// @lc code=end
