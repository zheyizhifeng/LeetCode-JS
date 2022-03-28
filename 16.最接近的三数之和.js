/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  let closestSum = Infinity;
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    start = i + 1;
    end = nums.length - 1;
    while (start < end) {
      sum = nums[i] + nums[start] + nums[end];
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }
      if (sum < target) {
        start++;
      } else if (sum === target) {
        return sum;
      } else {
        end--;
      }
    }
  }
  return closestSum;
};
// @lc code=end
