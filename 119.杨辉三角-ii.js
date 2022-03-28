/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  // rowIndex 非负
  let result = [1];
  //    [1]
  //   [1,1]
  //  [1,2,1]
  // [1,3,3,1]
  for (let i = 1; i <= rowIndex; i++) {
    for (let j = i; j > 0; j--) {
      if (j === i) {
        result[j] = 1;
      } else {
        result[j] = result[j - 1] + result[j];
      }
    }
  }
  return result;
};
// @lc code=end
