/*
 * @lc app=leetcode.cn id=599 lang=javascript
 *
 * [599] 两个列表的最小索引总和
 */

// @lc code=start
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let min = Infinity;
  let result = [];
  for (let i = 0; i < list1.length; i++) {
    let j = list2.indexOf(list1[i]);
    if (j > -1) {
      if (i + j < min) {
        result = [list1[i]];
        min = i + j;
      } else if (i + j === min) {
        result.push(list1[i]);
      }
    }
  }
  return result;
};
// @lc code=end
