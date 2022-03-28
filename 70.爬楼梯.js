/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  /*   const dp = [];
  // 定义dp[i] 表示爬到第i阶的方法数
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n]; */

  if (n === 1) return 1;
  if (n === 2) return 2;
  let one = 1;
  let two = 2;
  for (let i = 3; i <= n; i++) {
    let sum = one + two;
    one = two;
    two = sum;
  }
  return two;
};
// @lc code=end
