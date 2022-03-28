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
var search = function(nums, target) {
  const len = nums.length;
  if (len === 0) return -1;
  if (len === 1) return nums[0] === target ? 0 : -1;
  let left = 0;
  let right = len - 1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (nums[mid] === target) return mid;
    if (nums[mid] >= nums[left]) {
      // * nums[mid] >= nums[0]
      // * [left, mid] 升序
      if (nums[0] <= target && target < nums[mid]) {
        // * target 在 [left, mid - 1]
        right = mid - 1;
      } else {
        // * target 在 [mid + 1, right]
        left = mid + 1
      }
    } else { 
      // * nums[mid] < nums[0]
      // * [mid, right] 升序
      if (nums[mid] < target && target <= nums[len - 1]) {
        // * target 在 [mid + 1, right]
        left = mid + 1;
      } else {
        // * target 在 [left, mid - 1]
        right = mid - 1
      }
    }
  }
  return -1
};