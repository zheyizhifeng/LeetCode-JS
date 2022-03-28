/*
 * @lc app=leetcode.cn id=633 lang=javascript
 *
 * [633] 平方数之和
 */

// @lc code=start
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  let start = 0;
  let end = Math.floor(Math.sqrt(c));
  while (start <= end) {
    sum = start * start + end * end;
    if (sum < c) {
      start++;
    } else if (sum === c) {
      return true;
    } else {
      end--;
    }
  }
  return false;
};
// @lc code=end
