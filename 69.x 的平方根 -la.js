/*
 * @lc app=leetcode.cn id=69 lang=javascript
 * @lcpr version=30201
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
function getIntPart(x) {
  let l = 0;
  let r = x;
  let ans = 0;
  // 二分逼近区间
  while (l <= r) {
    const mid = l + ((r - l) >> 1);
    let powVal = mid * mid;
    if (powVal === x) {
      return mid;
    } else if (powVal < x) {
      // 更新答案
      ans = mid;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return ans;
}
var mySqrt = function (x) {
  /**
   * sqrt(x) = (a+b), a 是主要部分，b 是微小量 => x = a^2 + 2ab + b^2【舍去】
   * b ~= (x-a^2)/(2a), 再代入检查 （a+b)^2-x 的精度
   */
  // 先求整数部分
  const precision = 10 ** -5;
  let a = getIntPart(x);
  let b = (x - a ** 2) / (2 * a);

  while (Math.abs((a + b) ** 2 - x) > precision) {
    console.log('a, b >>>', a, b);
    // 精度不够，更新新的 a b
    a = a + b;
    b = (x - a ** 2) / (2 * a);
  }
  return Math.floor(a);
};
// @lc code=end



/*
// @lcpr case=start
// 4\n
// @lcpr case=end

// @lcpr case=start
// 8\n
// @lcpr case=end

 */
