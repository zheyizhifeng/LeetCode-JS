/*
 * @lc app=leetcode.cn id=1018 lang=javascript
 *
 * [1018] 可被 5 整除的二进制前缀
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (A) {
  const answer = [];
  let decimal = 0;
  for (let i = 0; i < A.length; i++) {
    decimal = ((decimal << 1) + A[i]) % 10;
    if (decimal === 0 || decimal === 5) {
      answer.push(true);
    } else {
      answer.push(false);
    }
  }
  return answer;
};
// @lc code=end
