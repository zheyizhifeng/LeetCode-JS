/*
 * @lc app=leetcode.cn id=796 lang=javascript
 *
 * [796] 旋转字符串
 */

// @lc code=start
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function (A, B) {
  if (A === B) return true;
  if (A.length !== B.length) {
    return false;
  }

  for (let i = 0; i < A.length; i++) {
    if (A === B) {
      return true;
    }
    A = A.slice(1) + A[0];
  }
  return false;
};
// @lc code=end
