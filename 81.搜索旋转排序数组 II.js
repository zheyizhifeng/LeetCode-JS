// @algorithm @lc id=81 lang=javascript
// @title search-in-rotated-sorted-array-ii
// @test([2,5,6,0,0,1,2],0)=true
// @test([2,5,6,0,0,1,2],3)=false
// @test([1,0,1,1,1], 0)=true
// @test([1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1], 2)=true
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  // function binarySearch(nums, left, right, target) {
  //   while (left < right) {
  //     const mid = left + ((right - left) >> 1);
  //     if (nums[mid] === target) {
  //       return mid;
  //     }
  //     if (nums[mid] > target) {
  //       right = mid - 1;
  //     } else {
  //       left = mid + 1;
  //     }
  //   }
  //   return nums[left] === target ? left : -1;
  // }
  const len = nums.length;
  // if (len === 1) return nums[0] === target;
  // if (nums[0] < nums[len - 1]) {
  //   return binarySearch(nums, 0, len - 1, target) !== -1;
  // }
  let left = 0;
  let right = len - 1;
  while (left < right) {
    const mid = left + ((right - left) >> 1)
    if (nums[mid] === target) return true;
    if (nums[mid] === nums[left]) {
      left++;
      continue;
    }
    if (nums[mid] > nums[left]) {
      // * [left, mid] 有序
      if (target >= nums[left] && target < nums[mid]) {
        // * target 在前半部分
        right = mid - 1;
        // * 也可直接binarySearch(nums, left, mid - 1, target)
      } else {
        // * target 在后半部分
        left = mid + 1
      }
    } else {
      // * nums[mid] < nums[left] => [mid, right] 有序
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
        // * 也可直接binarySearch(nums, mid + 1, right, target)
      } else {
        right = mid - 1;
      }
    }
  }
  return nums[left] === target
};
