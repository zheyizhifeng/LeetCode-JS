/*
 * @lc app=leetcode.cn id=405 lang=javascript
 *
 * [405] 数字转换为十六进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  if (num === 0) return '0';
  if (num < 0) {
    num = num >>> 0;
  }
  let result = '';
  let map16 = '0123456789abcdef';
  while (num > 0) {
    yu = num % 16;
    result = map16[yu] + result;
    num = parseInt(num / 16);
  }
  return result;
};
// @lc code=end
