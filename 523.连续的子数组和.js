/*
 * @lc app=leetcode.cn id=523 lang=javascript
 *
 * [523] 连续的子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  // 同余定理：(m-n) = n*k  ==> m/k - n/k = n' ==> m和n满足对k取余结果一致
  // 前缀和 + HashSet
  if (nums.length < 2) return false;
  const len = nums.length;
  const dp = Array(len).fill(0);
  const map = new Map();
  // dp[i]表示nums[i]的前缀和
  // 也可以不用dp数组
  for (let i = 0; i < len; i++) {
    if (i === 0) {
      dp[i] = nums[i];
    } else {
      dp[i] = dp[i - 1] + nums[i];
    }
    const remainder = dp[i] % k
    if (i > 0 && remainder === 0) return true
    if (map.has(remainder)) {
      const prevIndex = map.get(remainder);
      if (i - prevIndex >= 2) { // 判断区间元素个数
        return true
      }
    } else {
      map.set(remainder, i) // 保留最小的i索引，不覆盖之前
    }
  }
  return false;
};
// checkSubarraySum([23,2,4,6,6], 7)
// @lc code=end
