/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  if (num1.length < num2.length) {
    num1 = '0'.repeat(num2.length - num1.length) + num1;
  }
  if (num1.length > num2.length) {
    num2 = '0'.repeat(num1.length - num2.length) + num2;
  }
  let result = '';
  let carry = 0;
  for (let i = num1.length - 1; i >= 0; i--) {
    let v1 = +num1[i];
    let v2 = +num2[i];
    let bit = (v1 + v2 + carry) % 10;
    carry = parseInt((v1 + v2 + carry) / 10);
    result = bit + result;
  }
  if (carry > 0) {
    result = '1' + result;
  }
  return result;
};
// @lc code=end
