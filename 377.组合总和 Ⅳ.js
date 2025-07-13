// @algorithm @lc id=377 lang=javascript 
// @title combination-sum-iv
// @test([1,2,3],4)=7
// @test([9],3)=0
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  // 定义 dp[i] 表示和为 i 的组合数。
  const dp = Array(target + 1).fill(0);
  // 状态转移方程为：dp[i] += dp[i-n]
  // 初始条件：dp[0] = 1（和为0的组合只有空集）。
  dp[0] = 1;
  for (let i = 1; i <= target; i++) {
    for (let n of nums) {
      if (i >= n) {
        // 选择n, 组合总数要加上剩下部分的组合总数
        // 累加 和为 i-n 的组合数
        dp[i] += dp[i - n]
      }
    }
  }
  return dp[target];
};