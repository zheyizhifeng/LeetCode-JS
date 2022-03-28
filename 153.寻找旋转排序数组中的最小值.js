// @algorithm @lc id=153 lang=javascript 
// @title find-minimum-in-rotated-sorted-array
// @test([3,4,5,1,2])=1
// @test([4,5,6,7,0,1,2])=0
// @test([11,13,15,17])=11
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  const len = nums.length;
  let left = 0;
  let right = len - 1;
  if(nums[right] >= nums[0]) return nums[0] // * 未旋转

  // * 直接找到最小数字的索引
  while(left < right) {
    const mid = (left + right) >> 1;
    const n = nums[mid];
    if (n >= nums[0]) {
      // * [left, mid] 升序, [mid + 1, right] 部分升序
      left = mid + 1
    } else {
      // * [mid, right] 升序, [left, mid - 1] 部分升序
      right = mid
    }
  }
  return nums[left]
};