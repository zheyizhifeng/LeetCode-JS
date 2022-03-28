/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  function isDigitOrLetter(c) {
    let code = c.charCodeAt(0);
    return (code >= 48 && code <= 57) || (code >= 97 && code <= 122);
  }
  s = s.toLocaleLowerCase();
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (!isDigitOrLetter(s[i])) {
      i++;
    } else if (!isDigitOrLetter(s[j])) {
      j--;
    } else {
      if (s[i] !== s[j]) return false;
      i++;
      j--;
    }
  }
  return true;
};

// @lc code=end
