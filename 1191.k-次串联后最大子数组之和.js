/*
 * @lc app=leetcode.cn id=1191 lang=javascript
 *
 * [1191] K 次串联后最大子数组之和
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var kConcatenationMaxSum = function (arr, k) {
  let mod = 10 ** 9 + 7;

  let maxStart = 0;
  let maxEnd = 0;
  let sumStart = 0;
  let sumEnd = 0;
  for (let i = 0; i < arr.length; i++) {
    sumStart += arr[i];
    if (sumStart > maxStart) {
      maxStart = sumStart;
    }
  }
  for (let j = arr.length - 1; j >= 0; j--) {
    sumEnd += arr[j];
    if (sumEnd > maxEnd) {
      maxEnd = sumEnd;
    }
  }
  console.log(maxStart, maxEnd);
};
// kConcatenationMaxSum([1,2], 3)
// kConcatenationMaxSum([1,-2, 1], 5)
kConcatenationMaxSum([-3, 2, -3, 4], 5);
// kConcatenationMaxSum([-1, -2], 7)
// @lc code=end
