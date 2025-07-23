// @algorithm @lc id=189 lang=javascript 
// @title rotate-array
// @test([1,2,3,4,5,6,7],3)=[5,6,7,1,2,3,4]
// @test([-1,-100,3,99],2)=[3,99,-1,-100]
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // 分步骤轮换
  // 1. 先反转整个数组
  // 2. 反转前 k 个【注意取模】
  // 3. 反转后 nums.length - k 个
  const n = nums.length;
  k = k % n;
  for (let i = 0; i < (n - 1) / 2; i++) {
    swap(nums, i, n - 1 - i)
  }
  // console.log('nums1>>>', nums)
  for (let i = 0; i < (k - 1) / 2; i++) {
    swap(nums, i, k - 1 - i)
  }
  // console.log('nums2>>>', nums)

  for (let i = k; i < (n - 1 + k) / 2; i++) {
    swap(nums, i, n - 1 + k - i)
  }
  // console.log('nums3>>>', nums)

};

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}