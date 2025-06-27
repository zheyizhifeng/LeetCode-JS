/*
 * @lc app=leetcode.cn id=3 lang=javascript
 * @lcpr version=30201
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let window = new Map();
  let l = 0;
  let r = 0;
  let res = 0;
  while (r < s.length) {
    let c = s[r];
    r++;
    // 进行窗口的更新
    window.set(c, window.has(c) ? window.get(c) + 1 : 1);
    // console.log('当前子串', s.slice(l, r));

    // 判断是否需要收缩
    while (window.get(c) > 1) {
      let leftChar = s[l];
      // console.log('遇到重复>>>', c, '最左边的字符是', leftChar);
      l++;
      // 更新map
      window.set(leftChar, window.get(leftChar) - 1);
    }
    res = Math.max(res, r - l);
  }
  return res;
};
// @lc code=end

/*
// @lcpr case=start
// "abcabcbb"\n
// @lcpr case=end

// @lcpr case=start
// "bbbbb"\n
// @lcpr case=end

// @lcpr case=start
// "pwwkew"\n
// @lcpr case=end

 */
