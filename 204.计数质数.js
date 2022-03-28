/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  function isPrime(x) {
    for (let i = 2; i * i <= x; i++) {
      if (x % i === 0) {
        return false;
      }
    }
    return true;
  }
  const dp = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    if (i <= 2) {
      dp[i] = 0;
    } else {
      dp[i] = isPrime(i - 1) ? dp[i - 1] + 1 : dp[i - 1];
    }
  }
  return dp[n];
};
// @lc code=end
