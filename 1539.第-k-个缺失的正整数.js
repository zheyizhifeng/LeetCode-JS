/*
 * @lc app=leetcode.cn id=1539 lang=javascript
 *
 * [1539] 第 k 个缺失的正整数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  let count = 0;
  for (let i = 1; i <= k + arr.length; i++) {
    if (!arr.includes(i)) count++;
    if (count === k) return i;
  }
};
// @lc code=end
