/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const result = Array(n)
    .fill(0)
    .map((_) => []);
  let count = 1;
  function writeArray(rowStart, rowEnd, colStart, colEnd) {
    if (rowStart > rowEnd || colStart > colEnd) return;
    /* if (rowStart === rowEnd) {

    } else if (colStart === colEnd) {
    }  */else {
      for (let i = colStart; i <= colEnd; i++) {
        result[rowStart][i] = count++;
      }
      for (let i = rowStart + 1; i <= rowEnd; i++) {
        result[i][colEnd] = count++;
      }
      for (let i = colEnd - 1; i >= colStart; i--) {
        result[rowEnd][i] = count++;
      }
      for (let i = rowEnd - 1; i >= rowStart + 1; i--) {
        result[i][colStart] = count++;
      }
      writeArray(rowStart + 1, rowEnd - 1, colStart + 1, colEnd - 1);
    }
  }
  writeArray(0, n - 1, 0, n - 1);
  // console.log(result);
  return result;
};
// generateMatrix(3);
// @lc code=end
