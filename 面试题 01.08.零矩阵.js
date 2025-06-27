// @algorithm @lc id=100186 lang=javascript
// @title zero-matrix-lcci
// @test([[1,1,1],[1,0,1],[1,1,1]])=[[1,0,1],[0,0,0],[1,0,1]]
// @test([[0,1,2,0],[3,4,5,2],[1,3,1,5]])=[[0,0,0,0],[0,4,5,0],[0,3,1,0]]
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const M = matrix.length;
  if (M === 0) return;
  const N = matrix[0].length;
  // 两个标记数组
  const rows = new Array(M).fill(false);
  const cols = new Array(N).fill(false);
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = true;
        cols[j] = true;
      }
    }
  }
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (rows[i] || cols[j]) {
        matrix[i][j] = 0;
      }
    }
  }
};
