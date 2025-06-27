// @algorithm @lc id=162 lang=javascript 
// @title find-peak-element
import * as a from 'algm'
// @test([1,2,3,1])=2
// @test([1,2,1,3,5,6,4])=5
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if (nums.length === 1) return 0;
    let left = 0, right = nums.length - 1;
    while(left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[mid + 1]) {
            right = mid; // mid is a peak or could be a peak
        } else {
            left = mid + 1; // mid + 1 is a peak
        }
    }
    return left; // or right, both are the same at this point
};