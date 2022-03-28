/*
 * @lc app=leetcode.cn id=823 lang=javascript
 *
 * [823] 带因子的二叉树
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var numFactoredBinaryTrees = function (A) {
  if (A.length <= 1) return A.length;

  A.sort((a, b) => a - b);
  const dp = Array(A.length).fill(1);
  const mod = 10 ** 9 + 7;
  const map = new Map();
  // 定义 dp[i] 表示以 A[i] 为根节点的二叉树个数
  for (let i = 0; i < A.length; i++) {
    map.set(A[i], i);
    for (let j = 0; j < i; j++) {
      const shang = A[i] / A[j];
      if (map.has(shang)) {
        const shangIndex = map.get(shang);
        dp[i] += dp[j] * dp[shangIndex];
      }
    }
  }
  return dp.reduce((a, b) => a + b) % mod;
};
// @lc code=end
// const A = [2, 4, 5, 10];
// console.log(numFactoredBinaryTrees(A));
