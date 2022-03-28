// @algorithm @lc id=452 lang=javascript 
// @title minimum-number-of-arrows-to-burst-balloons
import * as a from 'algm'
// @test([[10,16],[2,8],[1,6],[7,12]])=2
// @test([[1,2],[3,4],[5,6],[7,8]])=4
// @test([[1,2],[2,3],[3,4],[4,5]])=2
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  const length = points.length;
  if (length === 1) return 1;
  points.sort((a, b) => a[0] - b[0]);
  let count = 1;
  let right = points[0][1];
  for (let i = 1; i < length; i++) {
    if (points[i][0] <= right) {
      right = Math.min(right, points[i][1]);
    } else {
      count++
      right = points[i][1]
    }
  }
  return count;
};