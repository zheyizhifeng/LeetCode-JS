// @algorithm @lc id=1185 lang=javascript
// @title find-in-mountain-array
// @test([1,2,3,4,5,3,1],3)=2
// @test([0,1,2,4,2,1],3)=-1
/**
 * This is the MountainArray's API interface.
 * You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
// Array.prototype.get = function (index) {
//   return this[index];
// };
// @test([1,2,3,4,5,3,1], 3)=2
var findInMountainArray = function (target, mountainArr) {
  function findTopIndex(mountainArr, left, right) {
    while (left < right) {
      const mid = left + ((right - left + 1) >> 1); // ! 这里** 【+1】 **非常重要
      if (mountainArr.get(mid) > mountainArr.get(mid - 1)) {
        // * mid 在上升坡
        left = mid; 
        // * 注意此时再继续向下取整当只剩下两个元素如(0,1), 上一次的mid === left时，会造成死循环,
      } else {
        // * mid 在下降坡
        right = mid - 1;
      }
    }
    return left;
  }
  function binarySearch(arr, target, left, right, isAscend = true) {
    while (left < right) {
      const mid = left + ((right - left) >> 1);
      if (arr.get(mid) === target) return mid;
      if (arr.get(mid) < target) {
        if (isAscend) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      } else {
        if (isAscend) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
    }
    return arr.get(left) === target ? left : -1;
  }
  const len = mountainArr.length();
  const topIndex = findTopIndex(mountainArr, 0, len - 1);
  const top = mountainArr.get(topIndex);
  if (top === target) return topIndex

  let ans = -1
  if (mountainArr.get(0) <= target && target <= mountainArr.get(topIndex - 1)) {
    ans = binarySearch(mountainArr, target, 0, topIndex - 1, true);
    if (ans !== -1) return ans
  } 
  if (target >= mountainArr.get(len - 1) && target <= mountainArr.get(topIndex + 1)) {
    ans = binarySearch(mountainArr, target, topIndex + 1, len - 1, false);
    if (ans !== -1) return ans
  }
  return ans;
};
// findInMountainArray(3, [1,2,3,4,5,3,1])