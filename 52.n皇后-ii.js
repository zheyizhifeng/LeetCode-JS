/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  let solution = 0;
  function isValid(path, row, col) {
    // 检查(row, col)的左上、正上、右上
    for (let eachRowCol of path) {
      if (eachRowCol === col) {
        return false;
      }
    }
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (path[i] === j) {
        return false;
      }
    }
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (path[i] === j) {
        return false;
      }
    }
    return true;
  }
  function backtrack(path = [], row) {
    if (row === n) {
      solution++;
    } else {
      for (let i = 0; i < n; i++) {
        if (!isValid(path, row, i)) {
          continue;
        }
        path.push(i);
        backtrack(path.slice(), row + 1);
        path.pop();
      }
    }
  }
  backtrack([], 0);
  return solution;
};
// @lc code=end
