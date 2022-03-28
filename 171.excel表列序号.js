/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  const letters = '#ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = 0;
  for (let c of s) {
    let bit = letters.indexOf(c);
    result = result * 26 + bit;
  }
  return result;
};
// @lc code=end
