/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 */

// @lc code=start
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function (A, B) {
  if (A.length !== B.length) return false;
  if (A === B) {
    return new Set(A.split('')).size < A.length;
  }
  let diffCount = 0;
  let firstDiffIndex = -1;
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) {
      if (firstDiffIndex >= 0) {
        if (A[i] !== B[firstDiffIndex] || B[i] !== A[firstDiffIndex]) return false;
      } else {
        firstDiffIndex = i;
      }
      diffCount++;
      if (diffCount > 2) return false;
    }
  }
  return diffCount === 2;
};
// @lc code=end
