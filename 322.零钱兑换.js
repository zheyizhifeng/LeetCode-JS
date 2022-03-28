/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
/* var coinChange = function (coins, amount) {
  // 递归
  let cache = new Map()
  cache.set(0, 0)
  function f(x) {
    if (x < 0) return Infinity;
    if (cache.has(x)) return cache.get(x)
    let min = Infinity;
    for (const coin of coins) {
      let tmp = f(x - coin) + 1;
      if (tmp < min) {
        min = tmp;
      }
    }
    cache.set(x, min)
    return min;
  }
  return f(amount) === Infinity ? -1 : f(amount);
};
 */

var coinChange = function (coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};

// @lc code=end
