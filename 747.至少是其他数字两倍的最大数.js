/*
 * @lc app=leetcode.cn id=747 lang=javascript
 *
 * [747] 至少是其他数字两倍的最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  if (nums.length === 1) return 0;
  // 找到最大的数字，和第二个最大的两倍比较
  let maxIndex = nums[0] < nums[1] ? 1 : 0;
  let secondIndex = 1 - maxIndex;
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] > nums[maxIndex]) {
      secondIndex = maxIndex;
      maxIndex = i;
    } else if (nums[i] > nums[secondIndex]) {
      secondIndex = i;
    }
  }
  // console.log('maxIndex => ' + maxIndex);
  // console.log('secondIndex => ' + secondIndex);

  return nums[maxIndex] >= nums[secondIndex] * 2 ? maxIndex : -1;
};
// dominantIndex([0, 1]);
// dominantIndex([0, 0, 2, 3]);
// @lc code=end
