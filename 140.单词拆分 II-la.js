/*
 * @lc app=leetcode.cn id=140 lang=javascript
 * @lcpr version=30201
 *
 * [140] 单词拆分 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  const set = new Set(wordDict);
  const n = s.length;

  const dp = Array(n + 1).fill(false);
  dp[0] = true;// 空字符串可拆分

  // 预处理DP数组：确定每个位置i是否可拆分
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && set.has(s.slice(j, i))) {
        dp[i] = true;
        break;// 只要有一个分割方式即可，无需继续检查
      }
    }
  }
  // 不满足前提：字符串s无法由字典构成
  if (!dp[n]) return [];

  // 前提：只有能构成了，才考虑拆分方案
  const result = [];
  const path = [];
  function dfs(start) {
    if (start === n) {
      result.push(path.join(' '));
      return;
    }
    // 遍历所有可能的结束位置end（start < end ≤ n）
    for (let end = start + 1; end <= n; end++) {
      const word = s.substring(start, end); // 当前子串（单词候选）
      // 检查：子串在字典中，且前start个字符可拆分（dp[start]为true）
      if (set.has(word) && dp[start]) {
        path.push(word); // 将当前单词加入路径
        dfs(end); // 递归处理end位置（下一个单词的起始位置）
        path.pop(); // 回溯：移除当前单词，尝试其他可能
      }
    }
  }
  dfs(0);
  return result;
};
// @lc code=end



/*
// @lcpr case=start
// "catsanddog"\n["cat","cats","and","sand","dog"]\n
// @lcpr case=end

// @lcpr case=start
// "pineapplepenapple"\n["apple","pen","applepen","pine","pineapple"]\n
// @lcpr case=end

// @lcpr case=start
// "catsandog"\n["cats","dog","sand","and","cat"]\n
// @lcpr case=end

 */
