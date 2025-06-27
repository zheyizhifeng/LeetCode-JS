// @algorithm @lc id=1000037 lang=javascript
// @title get-kth-magic-number-lcci
import * as a from 'algm';
// @test(5)=9
/**
 * @param {number} k
 * @return {number}
 */
var getKthMagicNumber = function (k) {
  const dp = new Array(k + 1).fill(Infinity);
  for (let i = 1; i <= k; i++) {
    if (i === 1) {
      dp[i] = 1;
      continue;
    }
    for (let j = 1; j < i; j++) {
      const p3 = dp[j] * 3;
      const p5 = dp[j] * 5;
      const p7 = dp[j] * 7;
      if (p3 > dp[i - 1]) {
        dp[i] = Math.min(dp[i], p3);
      } else if (p5 > dp[i - 1]) {
        dp[i] = Math.min(dp[i], p5);
      } else if (p7 > dp[i - 1]) {
        dp[i] = Math.min(dp[i], p7);
      }
    }
  }
  return dp[k]
};
