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

/**
 * 如果在第 i 天卖出，那么要想获得最大利润，我们需要知道前 i-1 天的最小成本，也就是从 prices[0] 到 prices[i−1] 的最小值，把它作为买入价格，这可以用一个变量 minPrice 维护。

请注意，minPrice 维护的是 prices[i] 左侧元素的最小值。

由于只能买卖一次，所以在遍历中，维护 prices[i]−minPrice 的最大值，就是答案。
 */
var maxProfit = function (prices) {
  const n = prices.length;
  if (n.length < 2) return 0;
  let minPrice = prices[0]; // 用第一个值初始化前 i-1 天的最小值
  let maxP = 0; // 最大利润
  
  for(let p of prices) {
    // 更新第i天卖出最大利润: 当前价 - 历史最低价
    maxP = Math.max(maxP, p - minPrice);
    // 更新下一次卖出的历史最低价：因为当前价格有可能低于之前的历史最低价
    minPrice = Math.min(minPrice, p);
  }
  return maxP;
};
// @lc code=end
