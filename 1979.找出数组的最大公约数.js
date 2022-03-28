/*
 * @lc app=leetcode.cn id=1979 lang=javascript
 *
 * [1979] 找出数组的最大公约数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
  let max = Math.max.apply(null, nums)
  let min = Math.min.apply(null, nums)
  while (min !== 0) {
    [max, min] = [min, max % min]
  }
  return max
};
// @lc code=end