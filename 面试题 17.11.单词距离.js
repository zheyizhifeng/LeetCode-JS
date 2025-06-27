// @algorithm @lc id=1000039 lang=javascript
// @title find-closest-lcci
import * as a from 'algm';
// @test(["I","am","a","student","from","a","university","in","a","city"],"a","student")=1
/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var findClosest = function (words, word1, word2) {
  let x = words.indexOf(word1),
    y = words.indexOf(word2),
    ans = Infinity;
  words.forEach((item, index) => {
    if (word1 === item) {
      if (Math.abs(index - y) <= ans) ans = Math.abs(index - y);
      x = index;
    }
    if (word2 === item) {
      if (Math.abs(index - x) <= ans) ans = Math.abs(index - x);
      y = index;
    }
  });
  return ans;
};
