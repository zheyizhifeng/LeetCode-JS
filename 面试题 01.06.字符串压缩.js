// @algorithm @lc id=100161 lang=javascript
// @title compress-string-lcci
import * as a from 'algm';
// @test("aabcccccaaa")="a2b1c5a3"
// @test("abbccd")="abbccd"
/**
 * @param {string} S
 * @return {string}
 */
var compressString = function (S) {
  let compressed = '';
  let i = 0;
  while (i < S.length) {
    let currentChar = S[i];
    let count = 0;
    while(S[i] === currentChar) {
      i++;
      count++;
    }
    compressed += currentChar + count;
  }
  return compressed.length < S.length ? compressed : S;
};
