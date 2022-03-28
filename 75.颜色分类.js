// @algorithm @lc id=75 lang=javascript 
// @title sort-colors
// @test([2,0,2,1,1,0])=[0,0,1,1,2,2]
// @test([2,0,1])=[0,1,2]
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let zero = 0, one = 0, two = 0
  for(let n of nums) {
    if (n == 0) zero++;
    else if (n == 1) one++;
    else two++
  }
  for (let i = 0; i < nums.length; i++) {
    for(let j = 0; j < zero; j++) {
      nums[i] = 0;
      i++;
    }
    for(let j = 0; j < one; j++) {
      nums[i] = 1;
      i++;
    }
    for(let j = 0; j < two; j++) {
      nums[i] = 2;
      i++;
    }
  }
  // return nums
};