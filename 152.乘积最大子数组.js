/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  // dp[i]表示以nums[i]结尾的连续子数组的最大乘积
  // dp[i] = Math.max(nums[i], nums[i] * F(i-1)), F(i)表示以nums[i]结尾的某序列的乘积
  // if (nums[i] < 0) 希望F(i-1)越小越好
  // if (nums[i] > 0) 希望F(i-1)越大越好
  // 定义 dp_max[i] 表示以nums[i]结尾的连续子数组最大乘积
  // 定义 dp_min[i] 表示以nums[i]结尾的连续子数组最小乘积
  let maxMul = -Infinity;
  const dp_max = Array(nums.length);
  const dp_min = Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      dp_max[i] = dp_min[i] = nums[i];
    } else {
      if (nums[i] === 0) {
        dp_max[i] = dp_min[i] = 0;
      } else if (nums[i] > 0) {
        dp_max[i] = Math.max(nums[i], nums[i] * dp_max[i - 1]);
        dp_min[i] = Math.min(nums[i], nums[i] * dp_min[i - 1]);
      } else {
        dp_max[i] = Math.max(nums[i], nums[i] * dp_min[i - 1]);
        dp_min[i] = Math.min(nums[i], nums[i] * dp_max[i - 1]);
      }
    }
  }
  // console.log(dp_max);
  // console.log(dp_min);
  return Math.max.apply(this, dp_max);
};
// @lc code=end
