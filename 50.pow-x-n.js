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

// 暴力枚举计算，不够优化，循环次数为|n|
/* var myPow = function (x, n) {
  if (x === 0 || x === 1) return x;
  if (x === -1) return n % 2 === 1 ? -1 : 1;
  len = n < 0 ? -n : n;
  let mul = 1;
  for (let i = 0; i < len; i++) {
    mul = mul * x;
  }
  return n < 0 ? 1 / mul : mul;
}; */

// 递归计算, 直接递归n次会爆栈，要减少迭代次数
//   var myPow = function (x, n) {
//   if (n === 0) return 1;
//   if (n < 0) {
//     // console.log(":>>> ", x, -n);
//     return 1 / myPow(x, -n);
//   }
//   if (n % 2 === 1) {
//     // 奇数幂次
//     // console.log(":>>> ", x, n - 1);

//     return x * myPow(x, n - 1);
//   } else {
//     // 偶数幂次
//     // console.log(":>>> ", x * x, n / 2);

//     return myPow(x * x, n / 2);
//   }
// };

// 直接折半
var myPow = function (x, n) {
  let len = n < 0 ? -n : n;
  let mul = 1;
  while (len !== 0) {
    if (len % 2 === 0) {
      x = x * x;
      len /= 2;
      // console.log(mul, x, len);
    } else {
      mul *= x;
      x = x * x;
      len = (len - 1) / 2;
      // console.log(mul, x, len);
    }
  }
  return n < 0 ? 1 / mul : mul;
};

// @lc code=end
