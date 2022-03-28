/*
 * @lc app=leetcode.cn id=821 lang=javascript
 *
 * [821] 字符的最短距离
 */

// @lc code=start
/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function (S, C) {
  const res = [];
  const set = new Set();
  for (let i = 0; i < S.length; i++) {
    if (S[i] === C) {
      set.add(i);
    }
  }
  for (let i = 0; i < S.length; i++) {
    let min = Infinity;
    for (let index of set) {
      min = Math.min(min, Math.abs(index - i));
    }
    res.push(min);
  }
  return res;
};
// @lc code=end
