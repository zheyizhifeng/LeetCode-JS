// @algorithm @lc id=240 lang=javascript
// @title search-a-2d-matrix-ii
import * as a from 'algm';
// @test([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 20)=false
// @test([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],5)=true
// @test([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],20)=false
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // 从左下角往上右查找
  if (matrix.length === 0 || matrix[0].length === 0) return false;
  let row = matrix.length - 1;
  let col = 0;
  while(row >= 0 && col < matrix[0].length) {
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] > target) {
      row--;
    } else {
      col++;
    }
  }
  return false
};
