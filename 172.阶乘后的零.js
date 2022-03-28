/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

// 递归
/* const trailingZeroes = (n) => {
  if (n < 5) return 0;
  // 5*10*15*20*25 = 5*5*5*5*5 * 1*2*3*4*5 = 5^k * k!, k = Math.floor(n/5)
  const k = Math.floor(n / 5);
  return k + trailingZeroes(k);
};
 */

// 循环
const trailingZeroes = function (n) {
  let count = 0;
  while (n >= 5) {
    const k = Math.floor(n / 5);
    count += k;
    n = k;
  }
  return count;
};
// @lc code=end
