/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
  if (num <= 0) return false;
  // 4: 100 【1在第3位】，从1起算
  // 16: 10000 【1在第5位】
  // 64: 1000000 【1在第7位】
  // n&(n-1) === 0 => 是2的幂次, 且要求1在奇数位
  // 0x55555555, 奇数位是1，偶数位是0 => 0101 0101 0101 0101 0101 0101 0101 0101
  return (num & (num - 1)) === 0 && (num & 0x55555555) === num;
};
// @lc code=end
