// @algorithm @lc id=680 lang=javascript
// @title valid-palindrome-ii
// import * as a from 'algm';
// @test("cbbcc")=true
// @test("axbcbaba")=false
// @test("aba")=true
// @test("abca")=true
// @test("abc")=false
// @test("axbcbaba")=false
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  function isPalindrome(s, start, end) {
    while (start < end) {
      if (s[start] !== s[end]) return false;
      start++;
      end--;
    }
    return true;
  }
  while (left < right) {
    if (s[left] !== s[right]) {
      // * 两种删除方式
      // * 删除左侧字符, 要满足 s[left+1]...s[right]对称
      // * 删除右侧字符, 要满足 s[left]...s[right-1]对称
      return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
    } else {
      left++;
      right--;
    }
  }
  return true;
};
