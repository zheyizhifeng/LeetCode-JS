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
  // 升序排序
  nums.sort((a, b) => a - b);
  // 少于 4 个
  if (nums.length < 4) return [];
  // 结果数组
  let result = [];
  // 第一个加数,nums[i]
  for (let i = 0; i < nums.length - 3; i++) {
    // -------------由于存在负数，负数相加，和可能更小，所以不能直接判断 nums[i] > target-----------
    //  nums[i] 跳过重复
    if (i >= 1 && nums[i] == nums[i - 1]) continue;
    // 第二个加数,nums[j]
    for (let j = i + 1; j < nums.length - 2; j++) {
      // nums[j] 跳过重复
      if (j - i > 1 && nums[j] == nums[j - 1]) continue;
      // 第三第四个加数, nums[j] 和 nums[k]
      let start = j + 1;
      let end = nums.length - 1;
      while (start < end) {
        const diff = target - (nums[i] + nums[j]);
        if (nums[start] + nums[end] > diff) {
          end--;
        } else if (nums[start] + nums[end] < diff) {
          start++;
        } else {
          // 找到一组答案
          result.push([nums[i], nums[j], nums[start], nums[end]]);
          // 去重
          const low = nums[start], high = nums[end];
          while (start < end && nums[start] === low) {
            start++;
          }
          while (start < end && nums[end] === high) {
            end--;
          }
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
