/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  /*   const dp = [];
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 1;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
  }
  return dp[n]; */

  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;
  let one = 0;
  let two = 1;
  let three = 1;
  for (let i = 3; i <= n; i++) {
    let sum = one + two + three;
    one = two;
    two = three;
    three = sum;
  }
  return three;
};
// @lc code=end
