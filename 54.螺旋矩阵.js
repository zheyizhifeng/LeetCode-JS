// @algorithm @lc id=54 lang=javascript 
// @title spiral-matrix
import * as a from 'algm'
// @test([[1,2,3],[4,5,6],[7,8,9]])=[1,2,3,6,9,8,7,4,5]
// @test([[1,2,3,4],[5,6,7,8],[9,10,11,12]])=[1,2,3,4,8,12,11,10,9,5,6,7]
/**
 * @param {number[][]} matrix
 * @return {number[]}
 * 递归方案
 */
var spiralOrder = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const result = [];
  //   定义四个边界
  let r1 = 0, r2 = m - 1;
  let c1 = 0, c2 = n - 1;
  // 定义一个遍历函数
  function spiderTraverse(r1, c1, r2, c2) {
    if (r1 > r2 || c1 > c2) return;
    // 特别注意边界条件： 单行、单列
    if (r1 === r2) {
      for (let i = c1; i <= c2; i++) {
        result.push(matrix[r1][i]);
      }
      return;
    }
    if (c1 === c2) {
      for (let i = r1; i <= r2; i++) {
        result.push(matrix[i][c1]);
      }
      return;
    }
    // 常规情况
    // 水平向右
    for (let i = c1; i <= c2; i++) {
      result.push(matrix[r1][i]);
    }
    r1++;
    // 垂直向下
    for (let i = r1; i <= r2; i++) {
      result.push(matrix[i][c2]);
    }
    c2--;
    // 水平向左
    for (let i = c2; i >= c1; i--) {
      result.push(matrix[r2][i]);
    }
    r2--;
    // 垂直向上
    for (let i = r2; i >= r1; i--) {
      result.push(matrix[i][c1])
    }
    c1++;
    spiderTraverse(r1, c1, r2, c2);
  }
  spiderTraverse(r1, c1, r2, c2);
  // console.log(result);

  return result;
};