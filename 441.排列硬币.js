/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  if (n === 0) return 0;
  // x行：(x*(x+1)/2) <= n => x*(x+1) <= 2*n
  // x >= 1 => x + 1>= 2 => x <= n && (x+1) <= 2*n
  for (let i = 1; i <= n; i++) {
    let sum = (i * (i + 1)) / 2;
    if (sum === n) return i;
    if (sum > n) return i - 1;
  }
};
// @lc code=end
