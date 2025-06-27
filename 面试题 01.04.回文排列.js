// @algorithm @lc id=100184 lang=javascript
// @title palindrome-permutation-lcci
import * as a from 'algm';
// @test("tactcoa")=true
/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
  const map = new Map();
  for (let c of s) {
    map.set(c, (map.get(c) || 0) + 1);
  }
  for (let [c, count] of map) {
    // 只留下奇数长度的字符
    if (count % 2 === 0) {
      map.delete(c)
    }
  }
  return map.size <= 1; // 最多只能有一个奇数长度的字符
};
