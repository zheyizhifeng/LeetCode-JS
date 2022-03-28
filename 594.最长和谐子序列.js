/*
 * @lc app=leetcode.cn id=594 lang=javascript
 *
 * [594] 最长和谐子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  if (nums.length <= 1) return 0;
  const map = new Map();
  for (let n of nums) {
    if (map.has(n)) {
      map.set(n, map.get(n) + 1);
    } else {
      map.set(n, 1);
    }
  }
  let longest = 0;
  const set = new Set(nums);
  for (let n of set) {
    if (map.has(n + 1)) {
      longest = Math.max(longest, map.get(n) + map.get(n + 1));
    }
  }

  return longest;
};
// @lc code=end
