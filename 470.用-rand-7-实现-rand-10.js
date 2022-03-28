/*
 * @lc app=leetcode.cn id=470 lang=javascript
 *
 * [470] 用 Rand7() 实现 Rand10()
 */

// @lc code=start
/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function () {
  // rand_X() 生成[1,X] 的随机整数, rand7() 等概率生成[1,2,3,4,5,6,7],
  // rand_Y() 生成[1,Y] 的随机整数, rand9() 等概率生成[1,2,3,4,5,6,7,8,9]
  // (rand9() - 1) * 7 + rand7() 生成 [0,7,14,21,28,35,42,49,56] + rand7() => [1,2,3,4,5,6,7,8,9...63]
  // (rand_X() - 1) * Y + rand_Y() 生成[1,2,3...X*Y]
  // (rand7() - 1) * 7 + rand7() 生成[1,2,3...49]
  // 如果已知rand40(), 那么rand10() = rand40() % 10 + 1
  let random = (rand7() - 1) * 7 + rand7(); // [1,2,3...49]
  while (random > 40) {
    random = (rand7() - 1) * 7 + rand7();
  }
  return (random % 10) + 1;
};
// @lc code=end
