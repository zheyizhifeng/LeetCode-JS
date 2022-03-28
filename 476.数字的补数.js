/*
 * @lc app=leetcode.cn id=476 lang=javascript
 *
 * [476] 数字的补数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  let result = 0;
  let bitIndex = 0;
  while (num > 0) {
    let bit = 1 - (num & 1);
    result += 2 ** bitIndex * bit;
    num = num >> 1;
    bitIndex++;
  }
  return result;
};
// @lc code=end
