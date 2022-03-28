/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let end = s.length - 1;
  while (end >= 0 && s[end] === ' ') {
    end--;
  }
  let start = end;
  while (start >= 0 && s[start] !== ' ') {
    start--;
  }
  return start < end ? end - start : 0;
};
// @lc code=end
