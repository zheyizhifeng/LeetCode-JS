// @algorithm @lc id=3 lang=javascript
// @title longest-substring-without-repeating-characters
// @test("abcabcbb")=3
// @test("bbbbb")=1
// @test("pwwkew")=3
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let l = 0;
  let r = 0;
  const window = new Map();
  for (let i = 0; i < s.length; i++) {
    if (window.has(s[i])) {
      let last = window.get(s[i]);
      for (let j = l; j <= last; j++) {
        window.delete(s[j]);
      }
      l = last + 1;
    }
    r++;
    window.set(s[i], i);
    if (r - l > max) {
      max = r - l;
    }
  }
  return max;
};
