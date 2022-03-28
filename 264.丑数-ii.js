/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
/* var nthUglyNumber = function (n) {
  const dp = Array(n + 1).fill(Infinity);
  // dp[i] 表示第i个丑数

  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      dp[i] = 1;
    } else {
      // dp[i] = 2^x * 3^y * 5^z, x,y,z >= 0
      // 第i个丑数一定是在某个之前的丑数之上乘以 2||3||5 的结果, 且是大于dp[i-1] 中最小的
      for (let j = 1; j < i; j++) {
        if (dp[j] * 2 > dp[i - 1]) {
          dp[i] = Math.min(dp[i], dp[j] * 2);
        } else if (dp[j] * 3 > dp[i - 1]) {
          dp[i] = Math.min(dp[i], dp[j] * 3);
        } else if (dp[j] * 5 > dp[i - 1]) {
          dp[i] = Math.min(dp[i], dp[j] * 5);
        }
      }
    }
  }
  // console.log(dp);
  return dp[n];
}; */
var nthUglyNumber = function (n) {
  // 3指针：除n=1外，dp[i] = Math.min(dp[a]*2, dp[b]*3,dp[c]*5)
  let p2 = (p3 = p5 = 1);
  const dp = Array(n + 1);
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[p2] * 2, dp[p3] * 3, dp[p5] * 5);
    // PS: 三个if是并列关系，不是互斥关系，在于会有重合的情况，如丑数6 = 丑数2*3，也 = 丑数3*2
    if (dp[i] === dp[p2] * 2) p2++;
    if (dp[i] === dp[p3] * 3) p3++;
    if (dp[i] === dp[p5] * 5) p5++;
  }
  return dp[n];
};
// @lc code=end
