/*
 * @lc app=leetcode.cn id=873 lang=javascript
 *
 * [873] 最长的斐波那契子序列的长度
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var lenLongestFibSubseq = function (A) {
  let max = 0;
  let count = 0;
  let set = new Set(A);
  for (let i = 0; i < A.length - 2; i++) {
    for (let j = i + 1; j < A.length - 1; j++) {
      let x = A[i];
      let y = A[j];
      let z = x + y;
      count = 0;
      while (set.has(z)) {
        // console.log(x, y, z);
        count++;
        x = y;
        y = z;
        z = x + y;
      }
      if (count > max) {
        max = count;
      }
    }
  }
  return max > 0 ? max + 2 : max;
};
// @lc code=end
lenLongestFibSubseq([1, 2, 3, 4, 5, 6, 7, 8]);
