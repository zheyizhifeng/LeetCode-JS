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

var coinChange = function (coins, target) {
  const min = Math.min(...coins);
  if (target === 0) return 0;
  if (target < min) return -1;
  const dp = Array(target + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= target; i++) {
    // target 过小
    if (i < min) {
      dp[i] = -1;
      continue;
    }
    for (let coin of coins) {
      // 币值过大
      if (coin > i) continue;
      // 剩余无法凑出
      if (dp[i - coin] === -1) continue;
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
    if (dp[i] === Infinity) {
      dp[i] = -1;
    }
  }
  // console.log('dp >>>' ,dp)
  return dp[target]
};

// @lc code=end
