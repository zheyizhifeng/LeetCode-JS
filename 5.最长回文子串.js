// @algorithm @lc id=5 lang=javascript
// @title longest-palindromic-substring
import * as a from 'algm';
// @test("babad")="bab"
// @test("cbbd")="bb"
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (A) {
  // dp[i][j]: 从[i]~[j]区间是否为回文子串
  const n = A.length;
  let long = 0;
  let longest = '';
  const dp = Array.from({ length: n }, () => Array(n).fill(false));

  for (let i = n - 1; i >= 0; i--) {
    // 区间是[i,j], 故而要保证 i <= j，注意遍历方向;
    for (let j = i; j < n; j++) {
      // 一个字符的，自然是回文
      if (i === j) {
        dp[i][j] = true;
      } else if (j === i + 1) {
        // 两个字符：比较头尾
        dp[i][j] = A[i] === A[j];
      } else {
        // 多字符：比较头尾和中段
        dp[i][j] = dp[i + 1][j - 1] && A[i] === A[j];
      }
      if (dp[i][j] && j - i + 1 > long) {
        long = j - i + 1;
        longest = A.slice(i, j + 1);
      }
    }
  }
  return long;
};
