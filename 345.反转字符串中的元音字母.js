/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const set = new Set(['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']);
  const arr = s.split('');
  let i = 0,
    j = arr.length - 1;
  while (i < j) {
    while (i < arr.length && !set.has(arr[i])) {
      i++;
    }
    while (j >= 0 && !set.has(arr[j])) {
      j--;
    }
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }
  return arr.join('');
};
// @lc code=end
