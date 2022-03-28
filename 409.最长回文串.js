/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let countMap = new Map();

  for (let c of s) {
    if (countMap.has(c)) {
      countMap.set(c, countMap.get(c) + 1);
    } else {
      countMap.set(c, 1);
    }
  }
  let left = '';
  let right = '';
  let oddCountChar = '';
  for (let [k, v] of countMap) {
    if (!oddCountChar && (v & 1) === 1) {
      oddCountChar = k;
    }
    left = left + k.repeat(parseInt(v / 2));
    right = k.repeat(parseInt(v / 2)) + right;
  }
  return (left + oddCountChar + right).length;
};
// @lc code=end
