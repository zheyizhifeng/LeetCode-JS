// @algorithm @lc id=62 lang=javascript
// @title unique-paths
import * as a from 'algm';
// @test(3,7)=28
// @test(3,2)=3
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // 求 C(m+n-2, m-1)
  let res = 1;
  for (let i = 1; i <= m - 1; i++) {
    res = (res * (n - 1 + i)) / i;
  }
  return Math.round(res)
};
