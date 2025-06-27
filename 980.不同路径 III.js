// @algorithm @lc id=1022 lang=javascript
// @title unique-paths-iii
import * as a from 'algm';
// @test([[1,0,0,0],[0,0,0,0],[0,0,2,-1]])=2
// @test([[1,0,0,0],[0,0,0,0],[0,0,0,2]])=4
// @test([[0,1],[2,0]])=0
/**
 * @param {number[][]} grid
 * @return {number}
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function (grid) {
  const m = grid.length,
    n = grid[0].length;
  let count = 0,
    i0 = -1,
    j0 = -1,
    ret = 0;
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (grid[i][j] === -1) ++count; // 记录障碍的数量
      else if (grid[i][j] === 1) [i0, j0] = [i, j]; // 记录起点
    }
  }
  count = m * n - count; // 除去障碍的数量（含可行格子数和起点、终点）

  const backtrack = (step, r, c) => {
    // 当前步数，行，列
    if (
      r < 0 ||
      r >= m ||
      c < 0 ||
      c >= n ||
      grid[r][c] === -1 | // 障碍
      (grid[r][c] === 1 && step !== 1) ||
      (grid[r][c] === 2 && step < count)
    )
      return; // 索引不合法 或 该位置不能走
      
    else if (step === count) {
      ++ret;
      return;
    } // 只有刚好到达终点一种可能，路径计数，跳出
    grid[r][c] = -1; // 已走过的路堵上
    backtrack(step + 1, r, c + 1); // 右
    backtrack(step + 1, r + 1, c); // 下
    backtrack(step + 1, r, c - 1); // 左
    backtrack(step + 1, r - 1, c); // 上
    grid[r][c] = 0; // 恢复现场
  };
  backtrack(1, i0, j0); // 起点也算一步，那么剩下的步数就是可行格子数和终点
  return ret;
};
