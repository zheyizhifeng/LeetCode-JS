/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // dp[i][j]表示从s[i]到s[j]是否是回文串
  /* const len = s.length;
  const dp = Array.from(Array(len), () => Array(len).fill(false));
  let longest = '';
  for (let i = len - 1; i >= 0; i--) {
    for (j = i; j < len; j++) {
      if (i === j) {
        dp[i][j] = true;
      } else if (j === i + 1) {
        dp[i][j] = s[i] === s[j];
      } else {
        dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
      }
      if (dp[i][j] && j - i + 1 > longest.length) {
        longest = s.slice(i, j + 1);
      }
    }
  }
  return longest; */
  function findPalindrome(s, l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
    }
    return s.slice(l + 1, r);
  }
  let longest = '';
  for (let i = 0; i < s.length; i++) {
    let tmp = findPalindrome(s, i, i);
    if (tmp.length > longest.length) {
      longest = tmp;
    }
    tmp = findPalindrome(s, i, i + 1);
    if (tmp.length > longest.length) {
      longest = tmp;
    }
  }
  return longest;
};
// @lc code=end
