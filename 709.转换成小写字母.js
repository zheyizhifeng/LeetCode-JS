/*
 * @lc app=leetcode.cn id=709 lang=javascript
 *
 * [709] 转换成小写字母
 */

// @lc code=start
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
  let result = '';
  for (let c of str) {
    if (c >= 'A' && c <= 'Z') {
      let code = c.charCodeAt(0);
      result += String.fromCharCode(code + 32);
    } else {
      result += c;
    }
  }
  return result;
};
// @lc code=end
