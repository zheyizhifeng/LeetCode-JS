// @algorithm @lc id=100233 lang=javascript
// @title eight-queens-lcci
import * as a from 'algm';
// @test(4)=[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const board = Array.from({ length: n }, () => Array(n).fill('.'));
  const result = [];
  /**
   * 
   * 1. 用集合记录占用情况
    cols：记录哪些列已经有皇后
    diag1：记录哪些主对角线（左上到右下，row - col）有皇后, 例如(1,2),(2,3),(3,4)
    diag2：记录哪些副对角线（右上到左下，row + col）有皇后，例如(1,4),(2,3),(3,2),(4,1)
    
    2. 判断和回溯过程
    放皇后前，判断这三个集合是否有冲突
    放皇后后，把对应下标加入集合
    回溯时，撤销集合中的记录
   */
  const cols = new Set();
  const diag1 = new Set(); // row - col
  const diag2 = new Set(); // row + col

  // 是否可以在 board[row][col] 放置皇后？
  // 检查同一行、同一列、对角线是否有其他皇后
  function isValid(board, row, col) {
    // 过滤对角线
    // 左下 ↗️ 右上
    // 右下 ↖️ 左上
    return !cols.has(col) && !diag1.has(row - col) && !diag2.has(row + col);
  }

  function backtrack(board, row) {
    if (row === board.length) {
      result.push(board.map((row) => row.join('')));
      return;
    }
    let n = board[row].length;
    for (let col = 0; col < n; col++) {
      // 过滤无效的
      if (!isValid(board, row, col)) {
        continue;
      }
      board[row][col] = 'Q';
      // 更新 3 个集合
      cols.add(col);
      diag1.add(row - col);
      diag2.add(row + col);
      backtrack(board, row + 1);
      board[row][col] = '.';
      // 还原 3 个集合
      cols.delete(col);
      diag1.delete(row - col);
      diag2.delete(row + col);
    }
  }
  backtrack(board, 0);
  return result;
};
