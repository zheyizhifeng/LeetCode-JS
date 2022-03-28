/*
 * @lc app=leetcode.cn id=762 lang=javascript
 *
 * [762] 二进制表示中质数个计算置位
 */

// @lc code=start
/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function (L, R) {
  function count_1(n) {
    let count = 0;
    while (n > 0) {
      if ((n & 1) === 1) count++;
      n = n >> 1;
    }
    return count;
  }
  function isPalindrome(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= parseInt(n / 2); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  let count = 0;
  while (L <= R) {
    if (isPalindrome(count_1(L))) count++;
    L++;
  }
  return count;
};
// @lc code=end
