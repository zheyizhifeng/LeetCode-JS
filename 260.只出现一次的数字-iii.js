/*
 * @lc app=leetcode.cn id=260 lang=javascript
 *
 * [260] 只出现一次的数字 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  let xor = nums.reduce((prev, cur) => prev ^ cur);
  let first_1 = xor & (~xor + 1); // 等价于xor & -xor
  // 找到xor的第一个bit为1的位置，表示此位置只出现一次的两个数bit不一样, 那么可以依据此bit分组
  const result = [];
  for (let n of nums) {
    if ((n & first_1) === 0) {
      result[0] ^= n;
    } else {
      result[1] ^= n;
    }
  }
  return result;
};
// @lc code=end
