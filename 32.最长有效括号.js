/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  const len = s.length;
  let longest = '';

  // 定义dp[i] 表示以s[i]结尾的最长有效括号串长度
  for (let i = 0; i < len; i++) {
    if (s[i] !== ')') {
      dp[i] = 0;
    } else {
      // s[i] === ')'
      if (s[i - 1] === '(') {
        // ....() 模式
        dp[i] = dp[i - 2] + 2;
      } else {
        // s[i-1] === ')'
        // ...)) 模式
        if (s[i - 2] === ')') {
          // ...))) 模式
          dp[i] = 1;
        } else {
          // s[i-2] === '('
          // ...())模式
          dp[i] = dp[i - dp[i - 1] - 2] + dp[i - 1] + 2;
        }
      }
    }
  }
  return dp[s.length - 1];
};
// @lc code=end
