// @algorithm @lc id=524 lang=javascript 
// @title longest-word-in-dictionary-through-deleting
import * as a from 'algm'
// @test("abpcplea",["ale","apple","monkey","plea"])="apple"
// @test("abpcplea",["a","b","c"])="a"
/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function(s, dictionary) {
  // * 先按长度从大到小，相等长度按照字母序排序
  dictionary.sort((a,b) => {
    if (a.length === b.length) {
      return a < b ? -1 : 1
    } else {
      return b.length - a.length
    }
  })
  for(let word of dictionary) {
    if (s === word) { // * 相等长度无须删除，直接判断字符串是否相等
      return word
    } else if (s.length > word.length) { 
      // * 只有s.length > word.length 才有机会删除字符得到目标word
      let s_i = 0; // * s 指针
      let word_i = 0; // * word 指针
      while (s_i < s.length && word_i < word.length) {
        if (s[s_i] === word[word_i]) {
          word_i++; // * 只有当前字符一致，word_i 才往前走
        }
        s_i++; // * s_i 始终往后走
      }
      // * 判断最终word_i 是否遍历结束
      if (word_i >= word.length) return word
    }
  }
  return ''
};