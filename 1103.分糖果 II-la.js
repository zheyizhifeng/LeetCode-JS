/*
 * @lc app=leetcode.cn id=1103 lang=javascript
 * @lcpr version=30201
 *
 * [1103] 分糖果 II
 */

// @lc code=start
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
  const result = Array(num_people).fill(0);
  let time = 1;
  // 没分完
  while (candies > 0) {
    // 剩余糖果不足, 全部给当前小朋友
    const i = (time - 1) % num_people;
    if (candies < time) {
      result[i] += candies;
      candies -= candies;
    } else {
      result[i] += time;
      candies -= time;
      time++;
    }
  }
  return result;
};
// @lc code=end



/*
// @lcpr case=start
// 7\n4\n
// @lcpr case=end

// @lcpr case=start
// 10\n3\n
// @lcpr case=end

 */
