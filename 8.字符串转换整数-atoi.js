/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  const max_int = 2 ** 31 - 1;
  const min_int = (-2) ** 31;
  const reg = /^\s*([+-]?\d+)/;
  const match = str.match(reg);
  if (!match) return 0;
  let result = parseInt(match[1]);
  if (result < min_int) {
    return min_int;
  }
  if (result > max_int) {
    return max_int;
  }
  return result;
};
// @lc code=end
