/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}``
 */
var isUgly = function (n) {
  if (n <= 0) return false;
  if (n === 1) return true;
  for (let factor of [2, 3, 5]) {
    while (n % factor === 0) {
      n = n / factor;
    }
  }
  return n === 1;
};
// @lc code=end
