/*
 * @lc app=leetcode.cn id=1455 lang=javascript
 *
 * [1455] 检查单词是否为句中其他单词的前缀
 */

// @lc code=start
/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
  const wordList = sentence.split(' ');
  for (let j = 0; j < wordList.length; j++) {}
  let index = 0;
  while (index < wordList.length) {
    const word = wordList[index];
    if (searchWord.length > word.length) {
      index++;
      continue;
    }
    let match = true;
    for (let i = 0; i < searchWord.length; i++) {
      if (searchWord[i] !== word[i]) {
        index++;
        match = false;
        break;
      }
    }
    if (match) {
      return index + 1;
    }
  }
  return -1;
};
// isPrefixOfWord('i love eating burger', 'burg');
// @lc code=end
