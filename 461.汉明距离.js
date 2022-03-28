/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let xor = x ^ y;
  // 计算xor中1的个数
  let count = 0;
  while (xor !== 0) {
    xor = xor & (xor - 1);
    count++;
  }
  return count;
};
// @lc code=end
