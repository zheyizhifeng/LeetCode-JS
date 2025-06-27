// @algorithm @lc id=100185 lang=javascript
// @title rotate-matrix-lcci
import * as a from 'algm';
// @test([[1,2,3],[4,5,6],[7,8,9]])=[[7,4,1],[8,5,2],[9,6,3]]
// @test([[1,2,3],[4,5,6],[7,8,9]])=[[7,4,1],[8,5,2],[9,6,3]]
// @test([[1,2,3],[4,5,6],[7,8,9]])=[[7,4,1],[8,5,2],[9,6,3]]
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length;

  /**
   * 分析：（i,j）=> (n-1-i,j) 原来的第j列对应旋转后的第j行, 而第i行对应旋转后从《最右一列往左》的第i列,也就是第 n-1-i列,
   * 如果不是用额外空间，考察一下转换过程
   * (i,j) => (j, n-1-i),
   * (j, n-1-i) => (n-1-i, n-1-j),
   * (n-1-i, n-1-j) => (n-1-j, i),
   * (n-1-j, i) => (i, j)   ==>>>>> 竟然回到了最初
   */

  // 循环条件分析：
  // 1. i < n / 2: 只需要遍历到矩阵的中间行
  // 2. j < (n + 1) / 2: 如果 n 是奇数，最后一行的中间元素不需要交换
  //    如果 n 是偶数，最后一行的中间两个元素也不需要交换
  
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = 0; j < Math.floor((n + 1) / 2); j++) {
      
      const temp = matrix[i][j];
      // 一次交换四个位置的值
      matrix[i][j] = matrix[n - 1 - j][i];
      matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];
      matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];
      matrix[j][n - 1 - i] = temp;
    }
  }
};
