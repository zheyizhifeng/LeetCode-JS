// @algorithm @lc id=547 lang=javascript
// @title number-of-provinces
// @test([[1,1,0],[1,1,0],[0,0,1]])=2
// @test([[1,0,0],[0,1,0],[0,0,1]])=3
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  let cityLength = isConnected.length;
  let provinces = 0;
  const visited = Array(cityLength).fill(false);
  function dfs(isConnected, i) {
    for (let j = 0; j < cityLength; j++) {
      if (isConnected[i][j] === 1 && !visited[j]) {
        visited[j] = true
        dfs(isConnected, j)
      }
    }
  }
  for (let i = 0; i < cityLength; i++) {
    if (!visited[i]) {
      dfs(isConnected, i);
      provinces++;
    }
  }
  return provinces;
};
