/*
 * @lc app=leetcode.cn id=213 lang=javascript
 * @lcpr version=30201
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const n = nums.length;
  // 偷头部房间，相邻【1和 n-1】不能偷，只能选择[2,n-2]
  let maxA = nums[0] + rob1(nums.slice(2, n - 1));
  // 不偷头部房间, 只能选择[1,n-1]
  let maxB = rob1(nums.slice(1));
  // console.log('maxA, maxB,', maxA, maxB)
  return maxA >= maxB ? maxA : maxB;
};

// 普通 rob
function rob1(nums) {
  const n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];
  const dp = Array(n).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return dp[n - 1];
}
// @lc code=end

/*
// @lcpr case=start
// [2,3,2]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

 */
