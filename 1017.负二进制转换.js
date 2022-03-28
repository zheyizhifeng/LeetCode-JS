/*
 * @lc app=leetcode.cn id=1017 lang=javascript
 *
 * [1017] 负二进制转换
 */

// @lc code=start
/**
 * @param {number} N
 * @return {string}
 */
var baseNeg2 = function (N) {
  if (N === 0) return '0';

  let result = '';
  while (N !== 0) {
    let yu = N % -2;

    result = Math.abs(yu) + result;
    N = Math.floor((N - Math.abs(yu)) / -2);
  }
  return result;
};
// baseNeg2(2);
// @lc code=end
