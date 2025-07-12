/*
 * @lc app=leetcode.cn id=474 lang=javascript
 * @lcpr version=30201
 *
 * [474] 一和零
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
/**
 * @param {string[]} strs - 输入的字符串数组，每个字符串由0和1组成
 * @param {number} m - 最多可用的0的数量
 * @param {number} n - 最多可用的1的数量
 * @return {number} - 能选出的满足条件的最大字符串数量
 */
const findMaxForm = (strs, m, n) => {
  // 初始化动态规划数组 dp[i][j]
  // dp[i][j] 表示：使用最多i个0和j个1时，能选出的字符串子集的最大长度
  // 数组大小为 (m+1) x (n+1)，因为i和j的范围是0到m（或n）
  const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

  // 遍历每一个字符串，逐个处理
  for (let str of strs) {
    // 统计当前字符串中0和1的数量
    let numOfZeros = 0; // 当前字符串需要的0的数量
    let numOfOnes = 0;  // 当前字符串需要的1的数量

    // 遍历字符串的每个字符，统计0和1的数量
    for (let c of str) {
      if (c === '0') {
        numOfZeros++; // 字符是0，0的数量加1
      } else {
        numOfOnes++;  // 字符是1，1的数量加1
      }
    }

    // 关键步骤：逆序更新dp数组（类似0-1背包的优化）
    // 逆序遍历i（0的数量）和j（1的数量），避免重复选择当前字符串
    // i从m开始倒序遍历到numOfZeros（当前字符串需要的0的数量）
    // j从n开始倒序遍历到numOfOnes（当前字符串需要的1的数量）
    for (let i = m; i >= numOfZeros; i--) {
      for (let j = n; j >= numOfOnes; j--) {
        // 状态转移方程：
        // 选当前字符串时，需要消耗numOfZeros个0和numOfOnes个1
        // 剩余资源为i - numOfZeros个0和j - numOfOnes个1，此时能选的子集长度为 dp[i - numOfZeros][j - numOfOnes] + 1（当前字符串）
        // 不选当前字符串时，长度保持原dp[i][j]不变
        // 取两者的最大值，更新dp[i][j]
        dp[i][j] = Math.max(
          dp[i][j], // 不选当前字符串时的最大长度（保持原值）
          dp[i - numOfZeros][j - numOfOnes] + 1 // 选当前字符串时的最大长度（剩余资源的最优解 + 1）
        );
      }
    }
  }

  // 最终，dp[m][n]即为使用最多m个0和n个1时能选出的最大字符串数量
  return dp[m][n];
};
// @lc code=end



/*
// @lcpr case=start
// ["10", "0001", "111001", "1", "0"]\n5\n3\n
// @lcpr case=end

// @lcpr case=start
// ["10", "0", "1"]\n1\n1\n
// @lcpr case=end

 */
