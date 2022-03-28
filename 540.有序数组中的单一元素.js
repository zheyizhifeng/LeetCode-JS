// @algorithm @lc id=540 lang=javascript
// @title single-element-in-a-sorted-array
// @test([1,1,2,3,3,4,4,8,8])=2
// @test([3,3,7,7,10,11,11])=10
// @test([1,1,2,2,3])=3
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  if (nums.length === 1) return nums[0];
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = left + ((right - left) >> 1);
    if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) return nums[mid];
    const isOddLengthOfLeft = (mid & 1) === 1;
    if (isOddLengthOfLeft) {
      if (nums[mid] === nums[mid - 1]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      if (nums[mid] === nums[mid - 1]) {
        right = mid - 2;
      } else {
        left = mid + 2
      }
    }
  }
  return nums[left];
};
