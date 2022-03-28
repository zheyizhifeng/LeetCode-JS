/*
 * @lc app=leetcode.cn id=1392 lang=javascript
 *
 * [1392] 最长快乐前缀
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPrefix = function (s) {
  for (let i = 1; i < s.length; i++) {
    let prefix = s.slice(0, s.length - i);
    let suffix = s.slice(i, s.length);
    if (prefix === suffix) return prefix;
  }
  return '';
};
// @lc code=end
