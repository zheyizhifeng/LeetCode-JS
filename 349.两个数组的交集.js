/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let set = new Set();
  for (let n of nums1) {
    if (nums2.indexOf(n) > -1) {
      set.add(n);
    }
  }
  return Array.from(set);
};
// @lc code=end
