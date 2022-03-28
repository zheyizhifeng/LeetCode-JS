/*
 * @lc app=leetcode.cn id=717 lang=javascript
 *
 * [717] 1比特与2比特字符
 */

// @lc code=start
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
  if (bits.length === 1) return true;
  if (bits[bits.length - 2] === 0) return true;
};
// @lc code=end
