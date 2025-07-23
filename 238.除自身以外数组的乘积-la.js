/*
 * @lc app=leetcode.cn id=238 lang=javascript
 * @lcpr version=30201
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = [];
  const n = nums.length;
  // 记录 nums[i] 左边的乘积
  const left = Array(n);
  // 记录 nums[i] 右边乘积
  const right = Array(n);
  // 结果 result[i] = left[i] * right[i]
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      left[i] = 1;
    } else {
      left[i] = left[i - 1] * nums[i - 1]
    }
  }
  for (let i = n - 1; i >= 0; i--) {
    if (i === n - 1) {
      right[i] = 1;
    } else {
      right[i] = right[i + 1] * nums[i + 1];
    }
  }

  
  return nums.map((_, i) => left[i] * right[i]);
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4]\n
// @lcpr case=end

// @lcpr case=start
// [-1,1,0,-3,3]\n
// @lcpr case=end

 */
