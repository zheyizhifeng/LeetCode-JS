/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let mapS = {};
  let mapT = {};
  for (let c of s) {
    if (mapS[c]) {
      mapS[c]++;
    } else {
      mapS[c] = 1;
    }
  }
  for (let c of t) {
    if (mapT[c]) {
      mapT[c]++;
    } else {
      mapT[c] = 1;
    }
  }
  for (let c in mapS) {
    if (mapS[c] !== mapT[c]) return false;
  }
  return true;
};
// @lc code=end
