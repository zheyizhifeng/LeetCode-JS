/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  if (word.toUpperCase() === word || word.toLowerCase() === word) return true;
  return word[0].toUpperCase() === word[0] && word.slice(1).toLowerCase() === word.slice(1);
};
// @lc code=end
