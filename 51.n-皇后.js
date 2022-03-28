/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  // row 表示当前选择的行
  // 路径：path 中⼩于 row 的那些⾏都已经成功放置了皇后
  // 选择列表：第 row ⾏的所有列都是放置皇后的选择
  // 结束条件：row === n
  const result = [];
  function isValid(path, row, col) {
    // 检查col列是否能放置皇后
    for (let i = 0; i < path.length; i++) {
      if (path[i][col] === 'Q') {
        return false;
      }
    }
    // 检查(row, col)是否在path中皇后的左下方
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (path[i][j] === 'Q') {
        return false;
      }
    }
    // 检查是否在右下
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (path[i][j] === 'Q') {
        return false;
      }
    }
    return true;
  }
  function backtrack(path = Array(n).fill('.'.repeat(n)), row) {
    if (row === n) {
      result.push(path);
    } else {
      for (let col = 0; col < n; col++) {
        if (!isValid(path, row, col)) {
          continue;
        }
        path[row] = path[row].substring(0, col) + 'Q' + path[row].slice(col + 1);
        backtrack(path.slice(), row + 1);
        path[row] = path[row].replace('Q', '.');
      }
    }
  }
  backtrack(Array(n).fill('.'.repeat(n)), 0);
  // console.log(result);
  return result;
};

solveNQueens(8);
// @lc code=end
