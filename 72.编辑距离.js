/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  // dp[i][j]表示
  // word1的前i个字母 => word2的前j个字母所使用的最少操作。
  const dp = [];
  for (let i = 0; i <= word1.length; i++) {
    dp.push(new Array(word2.length + 1));
    for (let j = 0; j <= word2.length; j++) {
      if (i === 0) {
        dp[0][j] = j;
      } else if (j === 0) {
        dp[i][0] = i;
      } else {
        // i >= 1 j >= 1
        // 分类讨论状态方程
        if (word1[i - 1] === word2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + 1);
        }
      }
    }
  }
  return dp[word1.length][word2.length];
};
// @lc code=end
