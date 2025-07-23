/*
 * @lc app=leetcode.cn id=189 lang=javascript
 * @lcpr version=30201
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  // 用了额外的空间
    k = k % nums.length;
    const concatNums = nums.concat(nums);
    for(let i=0;i<nums.length;i++) {
      nums[i] = concatNums[nums.length - k + i]
    }
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4,5,6,7]\n3\n
// @lcpr case=end

// @lcpr case=start
// [-1,-100,3,99]\n2\n
// @lcpr case=end

 */
