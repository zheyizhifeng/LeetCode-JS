/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  if (nums.length < 4) return [];
  let result = [];
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j - i > 1 && nums[j] == nums[j - 1]) continue;
      let start = j + 1;
      let end = nums.length - 1;
      while (start < end) {
        const diff = target - (nums[i] + nums[j]);
        if (nums[start] + nums[end] > diff) {
          end--;
        } else if (nums[start] + nums[end] < diff) {
          start++;
        } else {
          if (end === nums.length - 1 || nums[start] !== nums[start - 1] || nums[end] !== nums[end + 1]) {
            result.push([nums[i], nums[j], nums[start], nums[end]]);
          }
          start++;
          end--;
        }
      }
    }
  }
  // console.log(result);
  return result;
};
fourSum([0, 0, 0, 0], 0);
fourSum([-2, -1, -1, 1, 1, 2, 2], 0);
// @lc code=end
