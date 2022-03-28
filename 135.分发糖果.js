/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const candyList = new Array(ratings.length).fill(1);
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candyList[i] = candyList[i - 1] + 1;
    }
  }
  for (let i = ratings.length - 1; i >= 1; i--) {
    if (ratings[i] < ratings[i - 1]) {
      candyList[i - 1] = Math.max(candyList[i - 1], candyList[i] + 1);
    }
  }
  return candyList.reduce((acc, cur) => acc + cur, 0);
};
// @lc code=end
