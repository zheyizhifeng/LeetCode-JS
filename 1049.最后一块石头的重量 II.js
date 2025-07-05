// @algorithm @lc id=1130 lang=javascript 
// @title last-stone-weight-ii
// @test([2,7,4,1,8,1])=1
// @test([31,26,33,21,40])=5
/**
 * =================== 递归超时
 * @param {number[]} stones
 * @return {number}
 * 这是一个同归于尽抵消场景，分为两部分集合, 剩余质量一定是两个集合的总和做差，为了剩余重量更小，两边的集合要更平衡【尽量和相等, 有可能无法相等】，问题转化为： 容量为 sum/2 的 0-1 背包，如何尽可能装满;
 * 
 * 最终剩余重量 = 总重量 - 2×（某子集的和）。要使剩余最小，需让该子集的和尽可能接近总重量的一半。转化为 0-1 背包：容量为 sum/2，求能装的最大子集和。
 */
var lastStoneWeightII = function (stones) {
  const sum = stones.reduce((a, b) => a + b);
  const target = sum / 2;
  const max = Math.max(...stones);
  
  // 关键分支：数学正确的优化
  if (max >= target) return (max - target) * 2;
  
  // DFS需要修复两点：
  // const path = [];
  // const paths = [];
  let maxWeight = 0;
  
  function dfs(curSum, startIndex) {
    if (curSum > target) return;
    if (startIndex === stones.length) {
      if (curSum > maxWeight) {
        maxWeight = curSum;
      }
      // paths.push([...path]); // 记录所有路径（或只记录最大值）
      return;
    }
    
    // 不选当前元素
    dfs(curSum, startIndex + 1); // ✅ 传递i+1
    
    // 选当前元素（包含回溯）
    // path.push(stones[startIndex]);
    dfs(curSum + stones[startIndex], startIndex + 1); // ✅ 传递i+1
    // path.pop(); // ✅ 关键回溯
  }
  
  dfs(0, 0);
  return (target - maxWeight) * 2;  
};