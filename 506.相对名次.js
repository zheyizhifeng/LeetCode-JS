/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function (nums) {
  const map = new Map();
  const grades = nums.slice();
  map.set(1, 'Gold Medal');
  map.set(2, 'Silver Medal');
  map.set(3, 'Bronze Medal');
  grades.sort((a, b) => b - a);
  return nums.map((grade) => {
    let ranking = grades.indexOf(grade) + 1;
    if (ranking <= 3) return map.get(ranking);
    return '' + ranking;
  });
};
// @lc code=end
