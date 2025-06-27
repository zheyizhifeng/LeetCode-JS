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
var findMin = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  /**
   * 最小值右侧的所有元素 <= nums[r]；
   * 最小值左侧的所有元素 >= nums[r];
   */
  while (l < r) {
    const mid = l + ((r - l) >> 1);
    if (nums[mid] < nums[r]) {
      r = mid;
    } else if (nums[mid] > nums[r]) {
      l = mid + 1;
    } else {
      r--;
    }
  }
  return nums[l];
};
