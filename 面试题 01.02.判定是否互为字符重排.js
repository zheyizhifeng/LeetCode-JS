// @algorithm @lc id=100159 lang=javascript
// @title check-permutation-lcci
import * as a from 'algm';
// @test("abc","bca")=true
// @test("abc","bad")=false
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function (s1, s2) {
  if (s1.length !== s2.length) return false;
  const map = new Map();
  for (let c of s1) {
    map.set(c, (map.get(c) || 0) + 1);
  }
  for (let c of s2) {
    if (!map.has(c)) return false;
    map.set(c, map.get(c) - 1);
    if (map.get(c) < 0) return false;
  }
  return true;
};
