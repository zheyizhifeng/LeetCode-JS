/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
function candy(arr) {
  const n = arr.length;
  if (n === 0) return 0;
  if (n === 1) return 1;

  const candies = new Array(n).fill(1);

  // 左到右遍历，处理左边的约束
  for (let i = 1; i < n; i++) {
    if (arr[i] > arr[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  // 右到左遍历，处理右边的约束，并取最大值
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > arr[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }

  // 计算总糖果数
  return candies.reduce((sum, num) => sum + num, 0);
}
// @lc code=end
