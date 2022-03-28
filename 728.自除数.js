/*
 * @lc app=leetcode.cn id=728 lang=javascript
 *
 * [728] 自除数
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  function selfDividing(n) {
    let copyN = n;
    while (n > 0) {
      if (copyN % (n % 10) !== 0) return false;
      n = parseInt(n / 10);
    }
    return true;
  }
  let result = [];
  while (left <= right) {
    if (selfDividing(left)) {
      result.push(left);
    }
    left++;
  }
  return result;
};
// @lc code=end
