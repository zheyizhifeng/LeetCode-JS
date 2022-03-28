/*
 * @lc app=leetcode.cn id=1356 lang=javascript
 *
 * [1356] 根据数字二进制下 1 的数目排序
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  function count_1(n) {
    if (n === 0) return 0;
    let count = 0;
    while (n > 0) {
      if (n & (1 === 1)) count++;
      n = n >> 1;
    }
    return count;
  }
  return arr.sort(function (a, b) {
    return count_1(a) - count_1(b) || a - b;
  });
};
// @lc code=end
