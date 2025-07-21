/*
 * @lc app=leetcode.cn id=560 lang=javascript
 * @lcpr version=30201
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const n = nums.length;
  let ans = 0;
  // 统计每个[i, j] 的和
  for (let j = 0; j < n; j++) {
    let sum = 0;
    for (let i = j; i >= 0; i--) {
      sum += nums[i];
      if (sum === k) ans++;
    }
  }
  return ans;
};
// @lc code=end



/*
// @lcpr case=start
// [1,1,1]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n3\n
// @lcpr case=end

 */
