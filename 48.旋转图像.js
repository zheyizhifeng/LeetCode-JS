// @algorithm @lc id=48 lang=javascript 
// @title rotate-image
import * as a from 'algm'
// @test([[1,2,3],[4,5,6],[7,8,9]])=[[7,4,1],[8,5,2],[9,6,3]]
// @test([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]])=[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  /**
   * 分析：
   * 1. 先上下翻转，例如[[1,2,3],[4,5,6],[7,8,9]]得到
   * [[7,8,9],
   * [4,5,6],
   * [1,2,3]]
   * 2. 再对角线翻转，得到
   * [[7,4,1],
   * [8,5,2],
   * [9,6,3]]
   * 3. 即可得到结果
   */
  for (let i = 0; i < m / 2; i++) {
    for (let j = 0; j < n; j++) {
      [matrix[i][j], matrix[m - i - 1][j]] = [matrix[m - i - 1][j], matrix[i][j]]
    }
  }

  for(let i = 0; i < m; i++) {
    for(let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }

  return matrix;
};