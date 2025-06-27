/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

// 折半递归
/* var myPow = function (x, n) {
  if (n === 0) return 1;

  let pow = Math.abs(n);

  let result = pow % 2 === 0 ? myPow(x * x, pow / 2) : myPow(x * x, (pow - 1) / 2) * x;

  return n < 0 ? 1 / result : result;
}; */
var myPow = function (x, n) {
  if (n === 0) return 1;
  if (n === 1) return x;
  let pow = Math.abs(n);
  let result = 1;
  while (pow > 1) {
    // x^n = > x^(n/2)^2
    if (pow % 2 === 0) {
      // pow is even
      x = x * x;
      pow = pow >>> 1;
    } else {
      // pow is odd
      result *= x;
      x = x * x;
      pow = (pow - 1) >>> 1;
    }
  }
  result *= x;
  return n < 0 ? 1 / result : result;
};

// @lc code=end
