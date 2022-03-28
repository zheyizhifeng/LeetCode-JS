/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let result = '';
  if (a.length < b.length) {
    a = '0'.repeat(b.length - a.length) + a;
  } else if (a.length > b.length) {
    b = '0'.repeat(a.length - b.length) + b;
  }
  let carry = 0;
  for (let i = a.length - 1; i >= 0; i--) {
    let v1 = +a[i];
    let v2 = +b[i];
    result = ((v1 + v2 + carry) % 2) + result;
    carry = parseInt((v1 + v2 + carry) / 2);
  }
  if (carry) result = '1' + result;
  return result;
};
// @lc code=end
