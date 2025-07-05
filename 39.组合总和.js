// @algorithm @lc id=39 lang=javascript 
// @title combination-sum
// @test([2,3,6,7],7)=[[2,2,3],[7]]
// @test([2,3,5],8)=[[2,2,2,2],[2,3,3],[3,5]]
// @test([2],1)=[]
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const path = [];
  const result = [];
  const n = candidates.length;
  // 建议在DFS前添加排序（消耗O(n log n)但节省大量递归）
  candidates.sort((a, b) => a - b);

  function dfs(curSum, startIndex) {
    if (curSum > target) return;
    if (curSum === target) {
      result.push([...path]);
      return;
    }
    // curSum < target
    for (let i = startIndex; i < n; i++) {
      const newSum = curSum + candidates[i];
      // 🔼 关键添加：提前剪枝
      if (newSum > target) break;
      // 做选择
      path.push(candidates[i]);
      // 使用参数而非副作用： 不直接修改 curSum
      dfs(newSum, i);
      // 撤销选择
      path.pop();
    }
  }
  dfs(0, 0);
  return result;
};