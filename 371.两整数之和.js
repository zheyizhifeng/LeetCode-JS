/*
 * @lc app=leetcode.cn id=371 lang=javascript
 *
 * [371] 两整数之和
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  /*   
  # a = 5 => 1 0 1
  # b = 6 => 1 1 0
  # a^b => 得到相加结果每位的数字 0 1 1
  # a&b => 得到相加结果每位是否进位 1 0 0, 左移一位才能对位相加 */

  while ((a & b) !== 0) {
    console.log('a => ', a, 'b => ', b);
    let carry = (a & b) << 1;
    a = a ^ b;
    b = carry;
  }
  return a ^ b;
};
// @lc code=end
