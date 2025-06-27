// @algorithm @lc id=100158 lang=javascript
// @title is-unique-lcci
import * as a from 'algm';
// @test("leetcode")=false
// @test("abc")=true
/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function (astr) {
  for (let c of astr) {
    if (astr.indexOf(c) !== astr.lastIndexOf(c)) {
      return false;
    }
  }
  return true;
};
