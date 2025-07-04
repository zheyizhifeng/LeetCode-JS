/*
 * @lc app=leetcode.cn id=416 lang=javascript
 * @lcpr version=30201
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 * 使用二维动态规划
 * 关键：​状态由两个变量决定​ → 需要二维数组存储！

 状态1：当前处理到哪个数？​​ → 索引 i（范围 0 ~ n-1）
 状态2：当前达到的和？​​ → 数值 cur_sum（范围 0 ~ target）
定义二维DP数组：
dp[i][j] = True/False，表示用前 i 个数（nums[0]到nums[i-1]）能否凑出和 j。

i 的范围：0 ~ len(nums)（共 n+1 行）
j 的范围：0 ~ target（共 target+1 列）
 */
var canPartition = function (nums) {
  // 1. 总长度是否小于 2
  const n = nums.length;
  if (n < 2) return false;
  // 2. 计算并检查综合是否为奇数
  const sum = nums.reduce((a, b) => a + b);
  if (sum % 2 === 1) return false;
  const target = sum / 2;
  // 3. 检查所有元素是否都小于 target
  if (nums.some(x => x > target)) return false;

  // 4. 初始化二维DP数组（更容易理解）
  // dp[i][j] 表示使用前 i 个 (nums[0]到nums[i-1]) 元素能否组成和 j
  const dp = Array.from({ length: n + 1 }, () => Array(target + 1).fill(false));
  //  5. 设置基础情况：使用0个元素可以组成和为0
  dp[0][0] = true;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= target; j++) {
      // 对于每个 nums[i]，要么选要么不选
      // 不选： dp[i][j] = dp[i-1][j]
      // 选：那就要看前 i-1个【从 0～i-2】元素是否能凑出 j-第i个元素的和 => j-nums[i-1], 需要判断 j 和 nums[i-1]的大小
      if (j >= nums[i - 1]) {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]]
      } else {
        dp[i][j] = dp[i - 1][j];
        // j < nums[i-1], j - nums[i-1] < 0, 前i-1个元素必定无法凑出负数的和,
      }
    }
  }
  // 6. 返回结果
  return dp[n][target];
};
// @lc code=end



/*
// @lcpr case=start
// [1,5,11,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,5]\n
// @lcpr case=end

 */
