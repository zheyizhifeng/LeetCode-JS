/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  if (s.length === 0) return 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let result = 0;
  let j = 0; // s
  while (i < g.length && j < s.length) {
    if (g[i] <= s[j]) {
      result++;
      i++;
    }
    j++;
  }
  return result;
};
// @lc code=end
