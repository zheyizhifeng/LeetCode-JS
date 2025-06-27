// @algorithm @lc id=264 lang=javascript
// @title ugly-number-ii
import * as a from 'algm';
// @test(10)=12
// @test(1)=1
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  // dp[i] 表示第 i个丑数
  const dp = new Array(n + 1).fill(Infinity);
  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      dp[i] = 1;
      continue;
    }
    // dp[i] = 2^x * 3^y * 5^z, x,y,z >= 0
    // dp[i] 一定是某个 dp[j] * 2|3|5 的结果，且是大于dp[i-1] 中最小的一个
    for (let j = 1; j < i; j++) {
      let double = dp[j] * 2;
      let triple = dp[j] * 3;
      let fiveTimes = dp[j] * 5;
      if (double > dp[i - 1]) {
        dp[i] = Math.min(double, dp[i]);
      } else if (triple > dp[i - 1]) {
        dp[i] = Math.min(triple, dp[i]);
      } else if (fiveTimes > dp[i - 1]) {
        dp[i] = Math.min(fiveTimes, dp[i]);
      }
    }
  }
  return dp[n]
};
