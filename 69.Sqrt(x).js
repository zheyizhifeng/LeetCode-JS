// @algorithm @lc id=69 lang=javascript
// @title sqrtx
// @test(4)=2
// @test(8)=2
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  // * 已知 x>=1，是整数
  // * 基于牛顿法求Math.sqrt(x)
  // * 核心是利用 (x+C/x)/2 去逼近 f(x) = x^2 - C 的零点,
  // * f(x) = x^2 - C 任一点(x0, y0 = x0^2 - C)的切线为 (y - y0) = f'(x0)*(x - x0),
  // * =>  y - (x0^2 - C) = 2 * x0 * (x - x0) =>  带入y = 0, 求出交X轴于 ((C - x0^2) / (2 * x0) + x0, 0)
  // * =>  x = (x0 + C / x0) / 2
  if (x === 0) return 0;
  let C = x;
  let x0 = x;
  let crossPoint = (x0 + C / x0) / 2;
  while (Math.abs(x0 - crossPoint) > Math.pow(10, -5)) {
    x0 = crossPoint;
    crossPoint = (x0 + C / x0) / 2;
  }
  return Math.floor(crossPoint);
};
