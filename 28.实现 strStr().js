// @algorithm @lc id=28 lang=javascript
// @title implement-strstr
// @test("hello","ll")=2
// @test("aaaaa","bba")=-1
// @test("","")=0
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  function getBadChar(pattern) {
    const asciiArr = Array(256).fill(-1);
    for (let i = 0; i < pattern.length; i++) {
      asciiArr[pattern.charCodeAt(i)] = i;
    }
    return asciiArr;
  }
  function findBadChar(target, pattern, badCharArray) {
    const len = target.length;
    let j = -1; // 记录坏字符主串中的下标
    let k = -1; // 记录模式串中对应的坏字符下标
    let badChar = ''; // 记录坏字符
    for (let i = len - 1; i >= 0; i--) {
      if (target[i] !== pattern[i]) {
        j = i;
        badChar = target[i];
        break;
      }
    }
    if (j > 0) {
      k = badCharArray[badChar.charCodeAt(0)];
    }
    return {
      patternBadCharIndex: k,
      mainBadCharIndex: j,
    };
  }
};
