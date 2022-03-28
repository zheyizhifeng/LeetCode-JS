/*
 * @lc app=leetcode.cn id=1556 lang=javascript
 *
 * [1556] 千位分隔数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */

//  https://leetcode-cn.com/problems/thousand-separator/solution/zheng-ze-wei-zhi-pi-pei-by-shetia/
var thousandSeparator = function (n) {
  /**
   * @param {number} n
   * @return {string}
   */
  // 前瞻否定断言，匹配不是开头的位置 ?!^
  // 前瞻肯定断言，匹配所有的(\d{3})
  return (n + '').replace(/(?!^)(?=(\d{3})+$)/g, '.');
};
// @lc code=end
