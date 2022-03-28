/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  function isCharMatch(c1, p1) {
    return p1 === '.' || c1 === p1;
  }
  const lenS = s.length;
  const lenP = p.length;
  const dp = Array.from({ length: lenS + 1 }, () => Array(lenP + 1).fill(false));
  // dp[i][j] 表示 s(0,i-1) 是否匹配 p(0,j-1)
  dp[0][0] = true;

  // * badcase
  for (let j = 1; j <= lenP; j++) {
    if (p[j - 1] === '*') {
      dp[0][j] = dp[0][j - 2];
    }
  }

  for (let i = 1; i <= lenS; i++) {
    for (let j = 1; j <= lenP; j++) {
      if (isCharMatch(s[i - 1], p[j - 1])) {
        // s[i-1]和p[j-1]匹配
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === '*') {
        // 因为p穿首字符不会是*, 因此p[j-1] === '*'时, j >= 2 一定满足
        // s[i-1]和p[j-1]不匹配
        if (isCharMatch(s[i - 1], p[j - 2])) {
          dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j]; // [a-z]* 匹配0次、1次或多次
        } else {
          // s[i-1]和p[j-2]不匹配，扔掉 [a-z]* 的组合
          dp[i][j] = dp[i][j - 2];
        }
      }
    }
  }
  return dp[lenS][lenP];
};
// @lc code=end
