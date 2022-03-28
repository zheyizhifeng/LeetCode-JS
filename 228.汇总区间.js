/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (nums.length === 0) return [];
  if (nums.length === 1) return [`${nums[0]}`];
  let result = [];
  let i = 0;
  let j = 1;
  while (j <= nums.length) {
    if (nums[j] - nums[j - 1] === 1) {
      j++;
    } else {
      result.push(j - 1 === i ? `${nums[i]}` : `${nums[i]}->${nums[j - 1]}`);
      i = j;
      j = i + 1;
    }
  }
  // console.log(result);
  return result;
};
// summaryRanges([0, 1, 2, 4, 5, 7]);
// summaryRanges([0, 2, 3, 4, 6, 8, 9]);
// @lc code=end
