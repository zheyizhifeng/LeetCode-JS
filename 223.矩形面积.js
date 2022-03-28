/*
 * @lc app=leetcode.cn id=223 lang=javascript
 *
 * [223] 矩形面积
 */

// @lc code=start
/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function (A, B, C, D, E, F, G, H) {
  let crossS = 0;
  let crossW = Math.min(C, G) - Math.max(A, E);
  let crossH = Math.min(D, H) - Math.max(B, F);
  // 总面积 = S1-crossS+S2
  return (C - A) * (D - B) - Math.max(crossW, 0) * Math.max(crossH, 0) + (G - E) * (H - F);
};
// @lc code=end
