/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
/* var fib = function (N) {
  const dp = new Array(N);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= N; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }
  return dp[N];
}; */

var fib = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let prev = 0;
  let next = 1;
  for (let i = 2; i <= n; i++) {
    let sum = prev + next;
    prev = next;
    next = sum;
  }
  return next;
};
// @lc code=end
