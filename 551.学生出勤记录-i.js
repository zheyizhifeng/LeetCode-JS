/*
 * @lc app=leetcode.cn id=551 lang=javascript
 *
 * [551] 学生出勤记录 I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let countA = 0;
  if (s.includes('LLL')) return false;
  for (let c of s) {
    if (c === 'A') {
      countA += 1;
    }
    if (countA > 1) return false;
  }
  return true;
};
// @lc code=end
