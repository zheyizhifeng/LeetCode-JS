/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  if (n === 0) return true;
  const length = flowerbed.length;
  if (length === 1) return n === 1 && flowerbed[0] === 0;
  for (let i = 0; i < length; i++) {
    /*
     *  贪心
     *  能种花的地方
     *  当前位置没有花
     *  前面要么没有花, 要么是边界
     *  后面要么没有花, 要么是边界
     */

    /*
    if (flowerbed[i] === 0) {
      if (i === 0 && flowerbed[i + 1] === 0) {
        n--;
        flowerbed[i] = 1; // * 种花
      } else if (i === length - 1 && flowerbed[i - 1] === 0) {
        n--;
        flowerbed[i] = 1; // * 种花
      } else if (i > 0 && i < length && flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
        n--;
        flowerbed[i] = 1; // * 种花
      }
    } 
    */
    if (
      flowerbed[i] == 0 &&
      (i == 0 || flowerbed[i - 1] == 0) &&
      (i == length - 1 || flowerbed[i + 1] == 0)
    ) {
      n--;
      flowerbed[i] = 1; // * 种花
      if (n <= 0) return true;
    }
  }
  return false;
};
// canPlaceFlowers([1, 0, 0, 0, 1], 2);
// @lc code=end
