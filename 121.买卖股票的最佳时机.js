/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length < 2) return 0;
  let min = Infinity;
  let max = 0;
  for (let price of prices) {
    min = Math.min(min, price);
    max = Math.max(max, price - min);
  }
  return max;
};
// @lc code=end
