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
  const result = [];
  const board = Array.from({ length: n }, () => Array(n).fill('.'));

  function isValid(board, row, col) {
    // 检查列
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') return false;
    }
    // 检查左上对角线
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') return false;
    }
    // 检查右上对角线
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === 'Q') return false;
    }
    return true;
  }

  function backtrack(board, row) {
    if (row === n) {
      // 转成字符串数组
      result.push(board.map(r => r.join('')));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (!isValid(board, row, col)) continue;
      board[row][col] = 'Q';
      backtrack(board, row + 1);
      board[row][col] = '.';
    }
  }

  backtrack(board, 0);
  return result;
};

// @lc code=end
