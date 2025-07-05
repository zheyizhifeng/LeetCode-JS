/*
 * @lc app=leetcode.cn id=139 lang=javascript
 * @lcpr version=30201
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 * 动态规划
 * 我们定义 dp[i] 表示字符串 s 前 i 个字符组成的字符串 s[0..i−1] 能否由字典组成。
 * 公式化来说，我们需要枚举 s[0..i−1] 中的分割点 j ，看 s[0..j−1] 组成的字符串 s1（默认 j=0 时 s1为空串）
 * 和 s[j..i−1] 组成的字符串 s2是否都合法，
 */
var wordBreak = function (s, wordDict) {
  const n = s.length;
  const set = new Set(wordDict);

  const dp = Array(n + 1).fill(false);
  // dp[i] 表示前 i 个字符能否由字典组成
  dp[0] = true; // 空字符串可拆分
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && set.has(s.slice(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[n]
};
// @lc code=end



/*
// @lcpr case=start
// "leetcode"\n["leet", "code"]\n
// @lcpr case=end

// @lcpr case=start
// "applepenapple"\n["apple", "pen"]\n
// @lcpr case=end

// @lcpr case=start
// "catsandog"\n["cats", "dog", "sand", "and", "cat"]\n
// @lcpr case=end

 */
