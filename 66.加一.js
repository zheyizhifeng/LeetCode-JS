/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let result = Array(digits.length).fill(0);
  result[digits.length - 1] = 1;
  let carry = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    let v1 = digits[i];
    let v2 = result[i];
    result[i] = (v1 + v2 + carry) % 10;
    carry = parseInt((v1 + v2 + carry) / 10);
  }
  if (carry) result.unshift(1);
  return result;
};
// @lc code=end
