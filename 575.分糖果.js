/*
 * @lc app=leetcode.cn id=575 lang=javascript
 *
 * [575] 分糖果
 */

// @lc code=start
/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  let set = new Set(candyType);
  let average = candyType.length / 2;
  return Math.min(average, set.size);
};
// @lc code=end
