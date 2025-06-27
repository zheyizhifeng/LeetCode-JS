/*
 * @lc app=leetcode.cn id=372 lang=javascript
 *
 * [372] 超级次方
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function (a, b) {
  const MOD = 1337;
  function myPow(a, k) {
    // a^k % 1337
    let res = 1;
    const remainder = a % MOD;
    for (let i = 0; i < k; i++) {
      res *= remainder;
      res %= MOD;
    }
    return res;
  }

  if (b.length === 0) return 1; // a^0 = 1
  const last = b.pop();
  const part1 = myPow(a, last);
  // b 长度已经变化
  const part2 = myPow(superPow(a, b), 10);
  return (part1 * part2) % MOD;
};
// @lc code=end