// @algorithm @lc id=1000345 lang=javascript
// @title 2AoeFn
import * as a from 'algm';
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  /**
   * 从（0,0） 到达(m-1,n-1) 一定是向右走 n-1 步，向下走 m-1 步, 从所有的步选出 m-1 步⬇️ + n-1步 向右
   * 从总共 (m+n-2) 步中，选出 (m-1) 步向下（或 (n-1) 步向右），即为不同路径数。
   * ans = C(m+n-2, m-1) + C(m+n-2, n-1)
   * 公式：A(m,n) = m!/(m-n)! 而 A(m,n) = C(m,n) * n!
   * => C(m,n) = m!/[(m-n)! * n!]
   * C(m+n-2,m-1) = (m+n-2)! / [(n-1)! * (m-1)!]
   * 也就是 (m+n-2)*(m+n-3)*...*n / (m-1)!
   */
  let res = 1;
  for (let i = 1; i <= m - 1; i++) {
    res = (res * (n - 1 + i)) / i;
    // 第一次：res = 1 * n / 1
    // 第二次：res = 上一次结果 * (n+1) / 2
    // 第三次：res = 上一次结果 * (n+2) / 3
    // ...
  }
  return Math.round(res); // 防止浮点误差
};
