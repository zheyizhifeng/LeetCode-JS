// @algorithm @lc id=33 lang=javascript
// @title search-in-rotated-sorted-array
// @test([4,5,6,7,0,1,2,3],1)=5
// @test([4,5,6,7,0,1,2],4)=0
// @test([4,5,6,7,0,1,2],3)=-1
// @test([1],0)=-1
// @test([3,1],1)=1
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const len = nums.length;
  if (len === 0) return -1;
  if (len === 1) return nums[0] === target ? 0 : -1;
  let left = 0;
  let right = len - 1;
  while (left <= right) {
    const midIndex = left + Math.floor((right - left) / 2);
    const mid = nums[midIndex];
    if (mid === target) return midIndex;
    if (mid >= nums[left]) {
      // mid位于左半区
      if (target >= nums[left] && target < mid) {
        // target 位于 [left, midIndex - 1]
        right = midIndex - 1;
      } else {
        // target 位于[midIndex + 1, right]
        left = midIndex + 1;
      }
    } else {
      // mid在右半区
      if (target <= nums[right] && target > mid) {
        // target 位于[midIndex + 1, right]
        left = midIndex + 1;
      } else {
        // target 位于[left, midIndex - 1]
        right = midIndex - 1;
      }
    }
  }
  return -1;
};
