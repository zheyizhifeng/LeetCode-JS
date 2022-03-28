/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;
    nums[index] = -Math.abs(nums[index]);
  }
  return nums.reduce((prev, next, index) => {
    if (next > 0) {
      return prev.concat(index + 1);
    }
    return prev;
  }, []);
};
// @lc code=end
