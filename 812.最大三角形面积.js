/*
 * @lc app=leetcode.cn id=812 lang=javascript
 *
 * [812] 最大三角形面积
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
  let S = 0;
  for (let i = 0; i < points.length; i++) {
    let x1 = points[i][0];
    let y1 = points[i][1];
    for (let j = i + 1; j < points.length; j++) {
      let x2 = points[j][0];
      let y2 = points[j][1];
      for (let k = j + 1; k < points.length; k++) {
        let x3 = points[k][0];
        let y3 = points[k][1];
        let a = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
        let b = Math.sqrt((x3 - x1) * (x3 - x1) + (y3 - y1) * (y3 - y1));
        let c = Math.sqrt((x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2));
        let s = 0.5 * (a + b + c);
        let q = s * (s - a) * (s - b) * (s - c);
        if (q > 0) {
          let area = Math.sqrt(q);
          S = Math.max(S, area);
        }
      }
    }
  }
  // console.log('S = ' + S);
  return S;
};
// largestTriangleArea([
//   [35, -23],
//   [-12, -48],
//   [-34, -40],
//   [21, -25],
//   [-35, -44],
//   [24, 1],
//   [16, -9],
//   [41, 4],
//   [-36, -49],
//   [42, -49],
//   [-37, -20],
//   [-35, 11],
//   [-2, -36],
//   [18, 21],
//   [18, 8],
//   [-24, 14],
//   [-23, -11],
//   [-8, 44],
//   [-19, -3],
//   [0, -10],
//   [-21, -4],
//   [23, 18],
//   [20, 11],
//   [-42, 24],
//   [6, -19],
// ]);
// @lc code=end
