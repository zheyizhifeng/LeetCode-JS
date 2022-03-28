/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let right = intervals[0][1];
  let sum = 1;
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= right) {
      sum++;
      right = intervals[i][1];
    }
  }
  return intervals.length - sum;
};
// @lc code=end
