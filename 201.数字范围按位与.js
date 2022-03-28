/*
 * @lc app=leetcode.cn id=201 lang=javascript
 *
 * [201] 数字范围按位与
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function rangeBitwiseAnd(m, n) {
  /**
   * 此方案超时
   */
  /*   if (m === 0xffffffff) return m;
  let res = m;
  for (let i = m + 1; i <= n; i++) {
    res &= i;
    if (res === 0) return 0;
    if (i === 0xffffffff) break;
  }
  return res; */
  ////////////////////////////////
  /**
   *
   */
  /*   let shift = 0;
  while (m < n) {
    m = m >> 1;
    n = n >> 1;
    shift++;
  }
  return m << shift; */
  ////////////////////////////////
  while (m < n) {
    n = n & (n - 1);
  }
  return n;
}
// @lc code=end
