/*
 * @lc app=leetcode.cn id=5 lang=javascript
 * @lcpr version=30201
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

/**
 * 寻找回文串的问题核心思想是：从中间开始向两边扩散来判断回文串，
 */
var longestPalindrome = function (s) {
  let long = '';
  for (let i = 0; i < s.length; i++) {
    // 以 s[i] 为中心的最长回文子串
    let s1 = findPalindrome(s, i, i);
    // 以 s[i] 和 s[i+1] 为中心的最长回文子串
    let s2 = findPalindrome(s, i, i + 1);
    if (s1.length > long.length) {
      long = s1;
    }
    if (s2.length > long.length) {
      long = s2;
    }
  }
  return long;
};
// l: 左扩散中心, r: 右扩散中心,兼容奇偶长度的不同情况
function findPalindrome(s, l, r) {
  // 防止索引越界
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    // 从中心向两边展开
    l--;
    r++;
  }
  // 此时 [l+1, r-1] 就是最长回文串
  return s.slice(l + 1, r);
}
// @lc code=end

/*
// @lcpr case=start
// "babad"\n
// @lcpr case=end

// @lcpr case=start
// "cbbd"\n
// @lcpr case=end

 */
