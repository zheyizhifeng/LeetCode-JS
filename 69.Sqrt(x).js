// @algorithm @lc id=69 lang=javascript
// @title sqrtx
// @test(2)=1
// @test(3)=1
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
  const precision = 10 ** -5;
  let x0 = x;
  let y0 = x0 ** 2 - x;
  // 此处可以拿 yO 和精度对比，也可以拿x0进行对比
  while (y0 > precision) {
    x0 = (x0 + x / x0) / 2; // 用切线的零点代替
    y0 = x0 ** 2 - x;
  }
  return Math.floor(x0);
};