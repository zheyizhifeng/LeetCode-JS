// @algorithm @lc id=56 lang=javascript 
// @title merge-intervals
import * as a from 'algm'
// @test([[1,4],[5,6]])=[[1,4],[5,6]]
// @test([[1,3],[2,6],[8,10],[15,18]])=[[1,6],[8,10],[15,18]]
// @test([[1,3],[2,6],[8,10],[15,18]])=[[1,6],[8,10],[15,18]]
// @test([[1,4],[4,5]])=[[1,5]]
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
  const MAX_VAL = 200000;
  const starts = new Array(MAX_VAL + 1).fill(0);
  const ends = new Array(MAX_VAL + 1).fill(0);
  
  // 标记所有边界点
  for (const [s, e] of intervals) {
      starts[s]++;
      ends[e]++;
  }
  
  const result = [];
  let currentStart = -1;
  /**
   * count 是一个重叠层数计数器，它的核心作用是：
   * ​跟踪当前 position 被多少个区间同时覆盖​（即“重叠次数”）。
   * 理解这一点后，整个算法的逻辑会变得非常清晰。
   */
  let count = 0;
  
  for (let i = 0; i <= MAX_VAL; i++) {
      // 先处理所有入站（开始事件）
      if (starts[i] > 0) {
          if (count === 0) currentStart = i; // 从空到有
          count += starts[i];
      }
      
      // 后处理出站（结束事件）
      if (ends[i] > 0) {
          count -= ends[i];
          if (count === 0) result.push([currentStart, i]); // 从有到空
      }
  }
  
  return result;
}
