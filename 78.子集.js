/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];
  for (let i = 0; i < 2 ** nums.length; i++) {
    // for nums.length = 3 ==> i: [000,001,010,...,111]
    const tmp = [];
    for (let j = 0; j < nums.length; j++) {
      if ((i & (1 << j)) > 0) tmp.push(nums[j]);
    }
    result.push(tmp);
  }
  return result;
};
subsets([1, 2, 3]);
// @lc code=end
