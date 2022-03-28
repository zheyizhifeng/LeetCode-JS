/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  function getRomanInt(char) {
    switch (char) {
      case 'I':
        return 1;    
      case 'V':
        return 5;    
      case 'X':
        return 10;    
      case 'L':
        return 50;    
      case 'C':
        return 100;    
      case 'D':
        return 500;    
      case 'M':
        return 1000;    
      default:
        return 0;
    }
  }
  let ans = 0;
  // s = "MXIV" => split: M,X,I,V, => reverse: V,I,X,M
  let prevInt = 0;
  for(let cur of s) {
    let curInt = getRomanInt(cur);
    if (prevInt < curInt) {
      ans -= prevInt;
    } else {
      ans += prevInt;
    }
    prevInt = curInt;
  }
  return ans + getRomanInt(s[s.length - 1])
};
// @lc code=end
