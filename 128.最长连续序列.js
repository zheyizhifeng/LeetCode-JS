/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let ans = 0;
  for (let x of set) {
    // 找到x-1, x 不能为系列开头，因为 x-1 为开头更长
    if (set.has(x - 1)) continue;
    // x 开头
    let y = x + 1;
    while (set.has(y)) {
      y++;
    }
    ans = Math.max(ans, y - x);
  }
  return ans;
};
// @lc code=end
