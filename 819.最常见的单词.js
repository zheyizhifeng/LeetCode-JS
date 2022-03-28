/*
 * @lc app=leetcode.cn id=819 lang=javascript
 *
 * [819] 最常见的单词
 */

// @lc code=start
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  const match = paragraph.toLowerCase().match(/\w+/g);
  let longest = '';
  const dp = {};
  let maxCount = 0;
  banned = banned.map((str) => str.toLowerCase());
  for (let word of match) {
    if (banned.indexOf(word) < 0) {
      dp[word] = !dp[word] ? 1 : dp[word] + 1;
      if (dp[word] > maxCount) {
        longest = word;
        maxCount = dp[longest];
      }
    }
  }
  // console.log(dp);
  return longest;
};
// @lc code=end
