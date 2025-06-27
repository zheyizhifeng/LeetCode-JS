// @algorithm @lc id=32 lang=javascript 
// @title longest-valid-parentheses
import * as a from 'algm'
// @test("(()")=2
// @test(")()())")=4
// @test("")=0
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  const len = s.length;
  let longest = '';
  /**
   * 方案 1：暴力遍历，超时了
   */
  // 检查子串是否有效
  /* function isValid(str) {
    let leftCount = 0;
    for (let c of str) {
      if (c === '(') {
        leftCount++;
      } else {
        leftCount--;
        if (leftCount < 0) return false;
      }
    }
    return leftCount === 0;
  }
  // 检查所有子串
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      const str = s.slice(i, j + 1);
      if(isValid(str) && str.length > longest.length) {
        longest = str;
      }
    }
  }
  return longest.length; */

  /**
   * 方案 2：
   */
};