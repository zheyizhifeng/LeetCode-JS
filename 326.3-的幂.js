/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n <= 0) return false;
  const threeN = n.toString(3);
  return threeN.split('').reduce((prev, next) => parseInt(prev) + parseInt(next)) == 1;
};
// @lc code=end
