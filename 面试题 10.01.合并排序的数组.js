// @algorithm @lc id=1000012 lang=javascript
// @title sorted-merge-lcci
import * as a from 'algm';
// @test([1,2,3,0,0,0],3,[2,5,6],3)=[1,2,2,3,5,6]
// @test([4,5,6,0,0,0],3,[1,2,3],3)=[1,2,3,4,5,6]
/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function (A, m, B, n) {
  // A: [1,3,5,7], B: [2,4,6]
  // A: [4,5,6], B: [1,2,3]
  let tail = m + n - 1;
  let left = m - 1;
  let right = n - 1;
  while (left >= 0 || right >= 0) {
    if (B[right] >= A[left] || left < 0) {
      A[tail] = B[right];
      right--;
    } else {
      A[tail] = A[left];
      left--;
    }
    tail--;
  }

  return A;
};
