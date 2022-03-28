/*
 * @lc app=leetcode.cn id=806 lang=javascript
 *
 * [806] 写字符串需要的行数
 */

// @lc code=start
/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
  let row = 1;
  let len = 0;
  let initCode = 'a'.charCodeAt(0);
  for (let c of s) {
    let code = c.charCodeAt(0);
    if (len + widths[code - initCode] <= 100) {
      len += widths[code - initCode];
    } else {
      row++;
      len = widths[code - initCode];
    }
  }
  // console.log('row >>>> ', row);
  // console.log('len >>>> ', len);
  return [row, len];
};
// @lc code=end
