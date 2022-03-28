/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  // 不包括0的26进制
  function decimalTo26(n) {
    const map26 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    while (n > 0) {
      n--;
      result = map26[n % 26] + result;
      n = parseInt(n / 26);
    }
    return result;
  }
  return decimalTo26(n);
};
// @lc code=end
