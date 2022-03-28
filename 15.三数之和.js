/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return [];
  let result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i - 1] && i >= 1) {
      continue;
    }
    let start = i + 1;
    let end = nums.length - 1;
    const diff = -nums[i];
    while (start < end) {
      if (nums[start] + nums[end] < diff) {
        start++;
      } else if (nums[start] + nums[end] > diff) {
        end--;
      } else {
        if (end === nums.length - 1 || nums[start] !== nums[start - 1] || nums[end] !== nums[end + 1]) {
          result.push([nums[i], nums[start], nums[end]]);
        }
        start++;
        end--;
      }
    }
  }
  // console.log(result);
  return result;
};
// threeSum([-9, -2, 0, 0, 0, 2, 3, 6, 7]);
// threeSum([-1, -1, 0, 1, 1, 2, -4]);
// threeSum([-2, 0, 0, 2, 2]);
// @lc code=end
