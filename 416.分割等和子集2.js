// @algorithm @lc id=416 lang=javascript 
// @title partition-equal-subset-sum
// @test([1,5,11,5])=true
// @test([1,2,3,5])=false
/**
 * @param {number[]} nums
 * @return {boolean}
 * 递归+记忆
 */
var canPartition = function (nums) {
  // 集合不够分，直接返回 false
  if (nums.length <= 1) return false;
  const sum = nums.reduce((a, b) => a + b);
  // 找到两个和相等的子集 <=> 找到和为 target 【sum/2】的子集
  // 总和为奇数，直接返回 false
  if (sum % 2 === 1) return false;
  const target = sum / 2;

  const dp = Array(target + 1).fill(false);
  dp[0] = true;
  
  for (let n of nums) {
    for (let i = target; i >= n; i--) {
      // 千万不能这么写：dp[i] = dp[i - n]，会发生覆盖
      // 因为还有一种不选择 nums[i]的情形
      // 应该是: dp[i] = dp[i-n] || dp[i]
      dp[i] = dp[i - n] || dp[i]
    }
  }

  return dp[target];
};