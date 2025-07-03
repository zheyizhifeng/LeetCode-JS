// @algorithm @lc id=69 lang=javascript 
// @title sqrtx
// @test(4)=2
// @test(8)=2
/**
 * 此题只要求 sqrt 的整数部分, 这里提供求精确值的方案
 * sqrt(x) = (a+b), a 是主要部分，b 是微小量 => x = a^2 + 2ab + b^2【舍去】
 * b ~= (x-a^2)/(2a), 再代入检查 （a+b)^2-x 的精度
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let l = 0;
  let r = x;
  let ans = 0;
  // 二分逼近区间
  while (l <= r) {
    const mid = l + ((r - l) >> 1);
    let powVal = mid * mid;
    if (powVal === x) {
      return mid;
    } else if (powVal < x) {
      // 更新答案
      ans = mid;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return ans;
};