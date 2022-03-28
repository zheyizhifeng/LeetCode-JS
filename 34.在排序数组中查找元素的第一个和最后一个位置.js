// @algorithm @lc id=34 lang=javascript
// @title find-first-and-last-position-of-element-in-sorted-array
// @test([5,7,7,8,8,10],8)=[3,4]
// @test([5,7,7,8,8,10],6)=[-1,-1]
// @test([],0)=[-1,-1]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const len = nums.length;
  if (len === 0 || target < nums[0] || target > nums[len - 1]) {
    return [-1, -1];
  }

  function findFirstPos(nums, target) {
    let l = 0;
    let r = len - 1;
    while (l < r) {
      const mid = (l + r) >>> 1;
      const n = nums[mid];
      if (n < target) {
        // * 下一轮搜索 [left, mid + 1]
        l = mid + 1;
      } else if (n === target) {
        // * 下一轮搜索[left, mid]
        r = mid;
      } else {
        // * 下一轮搜索[left, mid - 1]
        r = mid - 1;
      }
    }
    if (nums[l] !== target) return -1;
    return l;
  }
  function findLastPos(nums, target) {
    let l = 0;
    let r = len - 1;
    while (l < r) {
      const mid = l + ((r - l + 1) >>> 1);
      const n = nums[mid];
      if (n < target) {
        l = mid + 1;
      } else if (n === target) {
        l = mid; // ! 左边界向下取整了
      } else {
        r = mid - 1;
      }
    }
    return l;
  }
  const left = findFirstPos(nums, target); // 首次出现位置
  if (left === -1) {
    return [-1, -1]
  }
  const right = findLastPos(nums, target); // 最后一次出现位置
  return [left, right];
};
