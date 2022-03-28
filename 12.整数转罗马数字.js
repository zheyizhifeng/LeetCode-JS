/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  function getRomanChar(n) {
    switch (n) {
      case 1: return 'I';
      case 4: return 'IV';
      case 5: return 'V';
      case 9: return 'IX';
      case 10: return 'X';
      case 40: return 'XL';
      case 50: return 'L';
      case 90: return 'XC';
      case 100: return 'C';
      case 400: return 'CD';
      case 500: return 'D';
      case 900: return 'CM';
      case 1000: return 'M';
      default: return '';
    }
  }
  let ans = '';
  let tenTimes = 1;
  while (num > 0) {
    let bit = num % 10;
    if (bit === 4 || bit === 9) {
      ans = getRomanChar(bit * tenTimes) + ans;
    } else {
      let fives = ~~(bit / 5);
      let ones = bit % 5;
      ans = getRomanChar(fives * tenTimes * 5) + getRomanChar(tenTimes).repeat(ones) + ans;
    }
    num = ~~(num / 10);
    tenTimes *= 10;
  }
  return ans;
};
// @lc code=end
