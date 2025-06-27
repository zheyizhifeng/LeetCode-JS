// @algorithm @lc id=1000022 lang=javascript 
// @title longest-word-lcci
import * as a from 'algm'
// @test(["cat","banana","dog","nana","walk","walker","dogwalker"])="dogwalker"
/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
  words.sort((a,b) => {
    if (a.length === b.length) {
      return a[0] > b[0] ? 1 : -1
    }
    return a.length - b.length
  })
  console.log(words);
  
};