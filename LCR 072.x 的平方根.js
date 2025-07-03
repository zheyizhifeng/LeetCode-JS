// @algorithm @lc id=1000336 lang=javascript 
// @title jJ0w9p
/**
 * 二分逼近
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let l = 0;
  let r = x;
  let ans = 0;
  while (l <= r) {
    const mid = (l + r) >> 1;
    if (mid * mid <= x) {
      ans = mid;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return ans;
};