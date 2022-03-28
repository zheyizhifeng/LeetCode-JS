/*
 * @lc app=leetcode.cn id=917 lang=javascript
 *
 * [917] 仅仅反转字母
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function (S) {
  let i = 0;
  let j = S.length - 1;
  let arr = S.split('');
  function isLetter(c) {
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
  }
  while (i < j) {
    if (isLetter(arr[i]) && isLetter(arr[j])) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    } else if (isLetter(arr[i])) {
      j--;
    } else if (isLetter(arr[j])) {
      i++;
    } else {
      i++;
      j--;
    }
  }
  return arr.join('');
};
// reverseOnlyLetters('ab-cd')
// @lc code=end
