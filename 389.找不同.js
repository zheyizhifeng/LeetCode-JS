/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let sumS = 0,
    sumT = 0;
  for (let c of s) {
    sumS += c.charCodeAt(0);
  }
  for (let c of t) {
    sumT += c.charCodeAt(0);
  }
  return String.fromCharCode(sumT - sumS);
};
// @lc code=end
