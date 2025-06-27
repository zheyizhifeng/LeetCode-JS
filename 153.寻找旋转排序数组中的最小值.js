// @algorithm @lc id=153 lang=javascript
// @title find-minimum-in-rotated-sorted-array
// @test([3,4,5,1,2])=1
// @test([4,5,6,7,0,1,2])=0
// @test([11,13,15,17])=11
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums.length === 1) return nums[0];
  let l = 0;
  let r = nums.length - 1;
  /**
   * 需要分清当前有无旋转
   */
  while (l < r) {
    const mid = l + ((r-l)>>1);
    if (nums[mid] < nums[r]) {
      // 中间值<最右
      r = mid;
    } else {
      l = mid+1;
    }
  }
    return nums[l]
};
