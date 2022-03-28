/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // 统计每个数组的每个bit之和，对3取余
  let res = 0;
  for (let i = 0; i < 32; i++) {
    let sumBit = 0;
    for (let j = 0; j < nums.length; j++) {
      sumBit += (nums[j] >> i) & 1;
    }
    if (sumBit % 3 !== 0) {
      // 1
      res += 1 << i;
    }
  }
  return res;
};
singleNumber([0, 1, 0, 1, 0, 1, 99]);
// @lc code=end
