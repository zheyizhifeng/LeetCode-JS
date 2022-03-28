// @algorithm @lc id=417 lang=javascript
// @title pacific-atlantic-water-flow
// @test([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]])=[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
// @test([[2,1],[1,2]])=[[0,0],[0,1],[1,0],[1,1]]
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  function dfs(heights, can_reach, i, j) {
    if (can_reach[i][j]) return;
    can_reach[i][j] = true;
    [
      [i - 1, j],
      [i + 1, j],
      [i, j - 1],
      [i, j + 1],
    ].forEach(([newI, newJ]) => {
      if (newI >= 0 && newI <= m - 1 && newJ >= 0 && newJ <= n - 1 && heights[newI][newJ] >= heights[i][j]) {
        dfs(heights, can_reach, newI, newJ);
      }
    });
  }

  const m = heights.length;
  if (m === 0) return [];
  let n = heights[0].length;
  if (n === 0) return [];

  const pacific = Array.from({ length: m }, () => Array(n).fill(false));
  const atlantic = Array.from({ length: m }, () => Array(n).fill(false));
  const ans = [];

  for (let i = 0; i < m; i++) {
    // 左右边缘
    dfs(heights, pacific, i, 0);
    dfs(heights, atlantic, i, n - 1);
    // pacific[i][0] = true;
    // atlantic[i][n - 1] = true;
  }
  for (let j = 0; j < n; j++) {
    // 上下边缘
    dfs(heights, pacific, 0, j);
    dfs(heights, atlantic, m - 1, j);
    // pacific[0][j] = true;
    // atlantic[m - 1][j] = true;
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacific[i][j] && atlantic[i][j]) {
        ans.push([i, j]);
      }
    }
  }
  return ans;
};
