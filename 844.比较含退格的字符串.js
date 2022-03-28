/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  const sArr = [];
  const tArr = [];
  for (let c of S) {
    if (c !== '#') {
      sArr.push(c);
    } else {
      sArr.pop();
    }
  }
  for (let c of T) {
    if (c !== '#') {
      tArr.push(c);
    } else {
      tArr.pop();
    }
  }
  return sArr.length === tArr.length && sArr.join() === tArr.join();
};
// @lc code=end
