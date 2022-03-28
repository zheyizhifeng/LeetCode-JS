/*
 * @lc app=leetcode.cn id=504 lang=javascript
 *
 * [504] 七进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  if (num === 0) return '0';
  let flag = 1;
  let result = '';
  if (num < 0) {
    flag = -flag;
    num = -num;
  }
  while (num > 0) {
    const yu = num % 7;
    result = yu + result;
    num = parseInt(num / 7);
  }
  if (flag < 0) result = '-' + result;
  return result;
};
// @lc code=end
