/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let map = new Map();
  function getBitSum(num) {
    if (map.has(num)) return map.get(num);
    let bitSum = 0;
    for (let bit of num.toString()) {
      bitSum += Number(bit) * Number(bit);
    }
    if (bitSum === 1) {
      map.set(num, true);
      return true;
    } else {
      map.set(num, false);
      return getBitSum(bitSum);
    }
  }
  return getBitSum(n);
};
// @lc code=end
