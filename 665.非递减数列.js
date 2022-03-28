// @algorithm @lc id=665 lang=javascript
// @title non-decreasing-array
import * as a from 'algm';
// @test([5,7,1,8])=true
// @test([3,4,2,3])=false
// @test([4,2,3])=true
// @test([4,2,1])=false
// @test([3,4,2,3])=false
// @test([5,7,1,8])=true
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  let changeCount = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      // * 两种改变元素的方式
      // ! A. nums[i] = nums[i + 1];
      // ! B. nums[i+1] = nums[i]
      if ((i >= 1 && nums[i + 1] < nums[i - 1]) && (i <= nums.length - 3 && nums[i] > nums[i + 2]))
        return false;
      changeCount++;
      if (changeCount > 1) return false;
    }
  }
  return true;
};
