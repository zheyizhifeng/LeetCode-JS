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
  // 如果已知rand40(), 那么rand10() = rand40() % 10 + 1 生成[0,9]
  
  /* let random = (rand7() - 1) * 7 + rand7(); // [1,2,3...49]
  while (random > 40) {
    random = (rand7() - 1) * 7 + rand7();
  } */

  while (true) {
    let a = rand7();
    let b = rand7();
    let num = (a - 1) * 7 + b; // rand 49
    if (num <= 40) return (num % 10) + 1; // 拒绝采样

    // num > 40
    a = num - 40; // rand 9, [1,9]
    b = rand7();
    num = (a - 1) * 7 + b; // rand 63, [1,63]
    if (num <= 60) return (num % 10) + 1;

    a = num - 60; // rand 3
    b = rand7();
    num = (a - 1) * 7 + b; // rand 21
    if (num <= 20) return (num % 10) + 1;
  }

  return (random % 10) + 1;
};

/* 另一种巧妙解法
var rand10 = function() {
  let i = 7;
  let j = 6;
  while (i > 6) i = rand7(); // i could be 1, 2, 3, 4, 5, or 6
  while (j > 5) j = rand7(); // j could be 1, 2, 3, 4, or 5
  if (i % 2 === 0) { // if i end up being even (50% the chance because it could be 2, 4, 6)
    return j; // return 1, 2, 3, 4, or 5
  } else { //if i end up being odd (also 50% of the chance because it could be 1, 3, 5)
    return j + 5; // return 6, 7, 8, 9, or 10
  }
};
*/
// @lc code=end
