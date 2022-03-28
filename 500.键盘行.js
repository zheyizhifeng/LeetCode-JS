/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 *
 * https://leetcode-cn.com/problems/keyboard-row/description/
 *
 * algorithms
 * Easy (69.63%)
 * Likes:    118
 * Dislikes: 0
 * Total Accepted:    22.7K
 * Total Submissions: 32.5K
 * Testcase Example:  '["Hello","Alaska","Dad","Peace"]'
 *
 * 给定一个单词列表，只返回可以使用在键盘同一行的字母打印出来的单词。键盘如下图所示。
 *
 *
 *
 *
 *
 *
 *
 * 示例：
 *
 * 输入: ["Hello", "Alaska", "Dad", "Peace"]
 * 输出: ["Alaska", "Dad"]
 *
 *
 *
 *
 * 注意：
 *
 *
 * 你可以重复使用键盘上同一字符。
 * 你可以假设输入的字符串将只包含字母。
 *
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  let rows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
  return words.filter((word) => {
    let atRow = -1;
    for (let c of word) {
      c = c.toLowerCase();
      if (atRow < 0) {
        if (rows[0].includes(c)) atRow = 0;
        else if (rows[1].includes(c)) atRow = 1;
        else if (rows[2].includes(c)) atRow = 2;
      } else {
        if (!rows[atRow].includes(c)) return false;
      }
    }

    return true;
  });
};
// @lc code=end
