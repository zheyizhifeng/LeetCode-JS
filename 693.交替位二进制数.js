/*
 * @lc app=leetcode.cn id=693 lang=javascript
 *
 * [693] 交替位二进制数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  while (n > 0) {
    let lastBit = n & 1;
    let secondBit = (n >> 1) & 1;
    if (lastBit === secondBit) return false;
    n = n >> 1;
  }
  return true;
};
// @lc code=end
