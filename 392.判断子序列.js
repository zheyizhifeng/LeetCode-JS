/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let i = 0;
  let j = 0;
  while (j < t.length) {
    if (i < s.length && s[i] === t[j]) {
      i++;
    }
    j++;
  }
  return i === s.length;
};
// console.log(isSubsequence('abc', 'abcc'));
// @lc code=end
