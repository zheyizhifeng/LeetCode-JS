// @algorithm @lc id=154 lang=javascript 
// @title find-minimum-in-rotated-sorted-array-ii
// @test([1,3,5])=1
// @test([2,2,2,0,1])=0
// @test([10,1,1,10,10,10])=1
// @test([0,1,0,0,0])=0
// @test([2,5,6,0,0,1,2])=0
// @test([1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1])=1
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  const len = nums.length;
  if (len === 1) return nums[0];
  // * len >= 2
  if (nums[len-1] > nums[0]) return nums[0] // * 旋转len次
  // * 旋转 1 ~ len-1 次
  let left = 0;
  let right = len - 1;
  while (left < right) {
    const mid = left + ((right - left) >> 1)
    if (nums[mid] == nums[right]) {
      right--;
    } else if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid
    }
  }
  return nums[left]
};