/*
 * @lc app=leetcode.cn id=868 lang=javascript
 *
 * [868] 二进制间距
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
  let first_1 = -1;
  let second_1 = -1;
  let bitIndex = 0;
  let longestDis = 0;
  while (n > 0) {
    let bit = n & 1;

    if (bit === 1) {
      if (second_1 >= 0) {
        first_1 = second_1;
        second_1 = bitIndex;
      } else if (first_1 >= 0) {
        second_1 = bitIndex;
      } else {
        first_1 = bitIndex;
      }
      if (first_1 >= 0 && second_1 >= 0) {
        longestDis = Math.max(longestDis, second_1 - first_1);
      }
    }
    n = n >> 1;
    bitIndex++;
  }
  return longestDis;
};
// @lc code=end
