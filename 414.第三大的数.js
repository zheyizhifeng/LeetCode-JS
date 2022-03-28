/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let set = new Set(nums);
  if (set.size <= 2) return Math.max(...set);
  let firstMax = -Infinity;
  let secondMax = -Infinity;
  let thirdMax = -Infinity;
  for (let cur of set) {
    if (cur > firstMax) {
      thirdMax = secondMax;
      secondMax = firstMax;
      firstMax = cur;
    } else if (cur > secondMax) {
      thirdMax = secondMax;
      secondMax = second = cur;
    } else if (cur > thirdMax) {
      thirdMax = cur;
    }
  }
  return thirdMax;
};
// @lc code=end
