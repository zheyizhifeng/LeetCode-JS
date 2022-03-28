/*
 * @lc app=leetcode.cn id=824 lang=javascript
 *
 * [824] 山羊拉丁文
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function (S) {
  let words = S.split(' ');
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < words.length; i++) {
    let suffix = 'a'.repeat(i + 1);
    if (!vowels.includes(words[i][0].toLowerCase())) {
      words[i] = words[i].slice(1) + words[i][0];
    }
    words[i] += 'ma' + suffix;
  }
  return words.join(' ');
};
// @lc code=end
