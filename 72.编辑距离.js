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
  const n1 = word1.length;
  const n2 = word2.length;
  const dp = Array.from({ length: n1 + 1 }, () => Array(n2 + 1).fill(0));

  for (let i = 0; i <= n1; i++) {
    for (let j = 0; j <= n2; j++) {
      if (i === 0) {
        dp[i][j] = j; // 插入 j 次
      } else if (j === 0) {
        dp[i][j] = i; // 删除 i 次
      } else {
        // 关键修正：比较 word1[i-1] 和 word2[j-1]
        if (word1[i - 1] === word2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1]; // 字符相同，无需操作
        } else {
          // 三种操作取最小值
          dp[i][j] = Math.min(
            dp[i][j - 1] + 1,   // 插入（在 word1 前 i 个字符后插入一个字符，匹配 word2 的第 j 个）
            dp[i - 1][j] + 1,   // 删除（删除 word1 的第 i 个字符）
            dp[i - 1][j - 1] + 1 // 替换（将 word1 的第 i 个字符替换为 word2 的第 j 个）
          );
        }
      }
    }
  }
  return dp[n1][n2];
};
// @lc code=end
