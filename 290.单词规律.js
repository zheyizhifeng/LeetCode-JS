/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let arr = s.split(' ');
  if (arr.length !== pattern.length) return false;
  const mapP = new Map();
  const mapS = new Map();
  for (let i = 0; i < pattern.length; i++) {
    if (mapP.has(pattern[i])) {
      if (mapP.get(pattern[i]) !== arr[i]) return false;
    } else {
      mapP.set(pattern[i], arr[i]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (mapS.has(arr[i])) {
      if (mapS.get(arr[i]) !== pattern[i]) return false;
    } else {
      mapS.set(arr[i], pattern[i]);
    }
  }
  return true;
};
// @lc code=end
