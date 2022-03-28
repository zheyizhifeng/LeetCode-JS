/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
  // 参考第7题整数反转
  let ans = 0;
  while (x > ans) { // 找到一半的位置
    ans = ans * 10 + (x % 10);
    x = parseInt(x / 10);
  }
  // 考虑奇数位x和偶数位x，
  // 例如，1221, while 终止在ans = 12 和 x = 12; 此时 x == ans
  // 又例如，12321， while 终止在 ans = 123 和 x = 12; 此时 x == parseInt(ans / 10)
  return x === ans || x === parseInt(ans / 10);
};
// @lc code=end
