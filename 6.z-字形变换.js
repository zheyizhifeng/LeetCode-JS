/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;
  let result = Array(numRows).fill('');
  let line = 0;
  let flag = -1;

  for (let c of s) {
    result[line] += c;
    if (line === 0 || line === numRows - 1) {
      flag = -flag;
    }
    line += flag;
  }
  return result.join('');
};
// @lc code=end
