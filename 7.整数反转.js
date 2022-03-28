/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let ans = 0;
  let MAX_VALUE = Math.pow(2, 31) - 1;
  let MIN_VALUE = -Math.pow(2, 31);
  while (x !== 0) {
    let bit = x % 10; // 从后往前统计位数
    // ans = ans * 10 + bit; // 有可能溢出
    /* 从ans * 10 + bit > MAX_VALUE 这个溢出条件来看
        当出现 ans > MAX_VALUE / 10 且 还有bit需要添加 时，则一定溢出
        当出现 ans == parseInt(MAX_VALUE / 10) 且 bit > 7 时，则一定溢出，7是2^31 - 1的个位数
    从ans * 10 + bit < MIN_VALUE这个溢出条件来看
        当出现 ans < MIN_VALUE / 10 且 还有bit需要添加 时，则一定溢出
        出现 ans == MIN_VALUE / 10 且 bit < -8 时，则一定溢出，8是-2^31的个位数 */
    if (ans > MAX_VALUE / 10 || (ans === parseInt(MAX_VALUE / 10) && bit > 7)) {
      return 0;
    }
    if (ans < MIN_VALUE / 10 || (ans === parseInt(MIN_VALUE / 10) && bit < -8)) {
      return 0;
    }
    ans = ans * 10 + bit;
    x = parseInt(x / 10);
  }
  return ans;
};
// @lc code=end
