/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  function binarySearch(arr, target, l, r) {
    if (l > r) return l;
    let mid = parseInt((r - l) / 2) + l;
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) return binarySearch(arr, target, l, mid - 1);
    if (arr[mid] < target) return binarySearch(arr, target, mid + 1, r);
  }
  return binarySearch(nums, target, 0, nums.length - 1);
};
// @lc code=end
