// @algorithm @lc id=88 lang=javascript
// @title merge-sorted-array
// import * as a from 'algm';
// @test([1,2,3,0,0,0],3,[2,5,6],3)=[1,2,2,3,5,6]
// @test([1],1,[],0)=[1]
// @test([0],0,[1],1)=[1]
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // * 从后往前写入nums1[]
  let i = m - 1;
  let j = n - 1;
  // * let index = m + n - 1， 可以省略变量，节省空间
  while (/* i >= 0 &&  */ j >= 0) {
    if (i >= 0 && nums1[i] >= nums2[j]) {
      // * nums1[index] = nums1[i]
      nums1[i + j + 1] = nums1[i];
      i--;
    } else {
      // * 此时nums2剩余
      // * nums1[index] = nums2[j]
      nums1[i + j + 1] = nums2[j];
      j--;
    }
    // * index--
  }
};
