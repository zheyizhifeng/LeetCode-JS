/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心索引
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const sum = nums.reduce((prev, cur) => prev + cur, 0);
  let sumLeft = 0;
  for (let i = 0; i < nums.length; i++) {
    if (sumLeft === sum - sumLeft - nums[i]) return i;
    sumLeft += nums[i];
  }
  return -1;
};
// console.log(pivotIndex([1, 2, 3]));
// @lc code=end
