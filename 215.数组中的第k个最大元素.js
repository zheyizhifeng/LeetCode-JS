// @algorithm @lc id=215 lang=javascript
// @title kth-largest-element-in-an-array
// @test([3,2,1,5,6,4],2)=5
// @test([3,2,3,1,2,4,5,5,6],4)=4
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  function random(l, r) {
    return parseInt(l + Math.random() * (r - l));
  }
  function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  // * 从小到大进行分区，找下标为len-k的
  function partition(arr, l, r) {
    const pivotIndex = random(l, r);
    const pivot = arr[pivotIndex];
    swap(arr, l, pivotIndex); // * pivot移动到最左边, 接下来顺次找比pivot大的，最后移动最左边的pivot到大序列的最后一个位置
    let less_than_pivot_index = l;
    for (let i = l + 1; i <= r; i++) {
      if (arr[i] < pivot) {
        less_than_pivot_index++
        swap(arr, i, less_than_pivot_index)
      }
    }
    swap(arr, l, less_than_pivot_index)
    return less_than_pivot_index
  }
  let len = nums.length;
  let l = 0;
  let r = len - 1;
  const target = len - k;
  while (l < r) {
    const partitionIndex = partition(nums, l, r);
    if (partitionIndex == target) {
      return nums[partitionIndex];
    } else if (partitionIndex < target) {
      l = partitionIndex + 1;
    } else {
      r = partitionIndex - 1;
    }
  }
  return nums[l];
};
