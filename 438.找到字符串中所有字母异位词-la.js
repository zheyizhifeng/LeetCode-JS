/*
 * @lc app=leetcode.cn id=438 lang=javascript
 * @lcpr version=30201
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  if (s.length < p.length) return []
  // need 记录 p 的频次表
  const need = new Map();
  for (let c of p) {
    need.set(c, (need.get(c) || 0) + 1)
  }
  // 主窗口
  const window = new Map();
  let l = 0, r = 0;
  const result = [];
  while (r < s.length) {
    const char = s[r];
    // 字符不存在，清空窗口状态，并跳转指针到有效字符
    if (!need.has(char)) {
      l = r + 1;
      r = r + 1;
      window.clear();
      continue;
    }
    // 字符有效, 扩充窗口
    window.set(char, (window.get(char) || 0) + 1);
    // 频次超过, 移动左指针
    while (window.get(char) > need.get(char)) {
      const leftChar = s[l];
      window.set(leftChar, window.get(leftChar) - 1);
      l++;
    }
    if (r - l + 1 === p.length) {
      result.push(l)
    }
    r++;
  }
  return result;
};
// @lc code=end



/*
// @lcpr case=start
// "cbaebabacd"\n"abc"\n
// @lcpr case=end

// @lcpr case=start
// "abab"\n"ab"\n
// @lcpr case=end

 */
