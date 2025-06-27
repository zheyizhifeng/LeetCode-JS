/*
 * @lc app=leetcode.cn id=56 lang=javascript
 * @lcpr version=30101
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * 排序，合并区间
 */
var merge = function (intervals) {
  const result = [];
  const n = intervals.length;
  intervals.sort((a, b) => a[0] - b[0])
  for (let i = 0; i < n; i++) {
    let cur = intervals[i];
    if (i === n - 1) {
      // 到达最后一个区间，直接 push
      result.push(intervals[i]);
      return result;
    }
    let next = intervals[i + 1];
    if (canMerge(cur, next)) {
      // 可以合并,合并到下一个区间
      const [x, y] = mergeTwoIntervals(cur, next);
      next[0] = x;
      next[1] = y;
    } else {
      // 不能合并，产生结果
      result.push(cur);
    }
  }
  return result;
};

// 合并两个区间
function mergeTwoIntervals(a, b) {
  // 两个可以合并的区间，合并为一个区间，左右边界取最小和最大
  return [Math.min(a[0], b[0]), Math.max(a[1], b[1])];
}

// 区间是否重叠？【可合并】
function canMerge(a, b) {
  return a[1] >= b[0];
}
// @lc code=end



/*
// @lcpr case=start
// [[1,3],[2,6],[8,10],[15,18]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,4],[4,5]]\n
// @lcpr case=end

 */
