/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];
  let shortestLength = Math.min.apply(
    this,
    strs.map((str) => str.length)
  );
  let prefix = '';
  for (let i = 0; i < shortestLength; i++) {
    let char_i = strs[0][i];
    for (let string of strs) {
      if (string[i] !== char_i) {
        return prefix;
      }
    }
    prefix += char_i;
  }
  return prefix;
};
longestCommonPrefix(['flower', 'flow', 'flight']);
// @lc code=end
