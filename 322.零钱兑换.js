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
  const dp = Array(target + 1).fill(Infinity);
  dp[0] = 0;
  for(let i=1;i<=target;i++) {
    for(let n of coins) {
      if (i < n) continue;
      dp[i] = Math.min(dp[i], dp[i-n] + 1);
    }
  }
  return dp[target] === Infinity ? -1 : dp[target]
};

// @lc code=end
