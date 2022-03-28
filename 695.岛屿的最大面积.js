// @algorithm @lc id=695 lang=javascript
// @title max-area-of-island
// @test([[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]])=6
// @test([[0,0,0,0,0,0,0,0]])=0
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let max = 0;
  let rowLength = grid.length;
  let columnLength = grid[0].length;
  function dfs(grid, i, j) {
    if (i < 0 || j < 0 || i >= rowLength || j >= columnLength || grid[i][j] === 0) return 0;
    grid[i][j] = 0;
    let area = 1;
    area += dfs(grid, i - 1, j);
    area += dfs(grid, i + 1, j);
    area += dfs(grid, i, j - 1);
    area += dfs(grid, i, j + 1);
    return area;
  }
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < columnLength; j++) {
      if (grid[i][j] === 1) {
        const area = dfs(grid, i, j);
        if (area > max) {
          max = area;
        }
      }
    }
  }
  return max;
};
