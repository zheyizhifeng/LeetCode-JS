/*
 * @lc app=leetcode.cn id=1073 lang=javascript
 *
 * [1073] 负二进制数相加
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var addNegabinary = function (arr1, arr2) {
  if (arr1.length < arr2.length) {
    arr1 = Array(arr2.length - arr1.length)
      .fill(0)
      .concat(arr1);
  }

  if (arr2.length < arr1.length) {
    arr2 = Array(arr1.length - arr2.length)
      .fill(0)
      .concat(arr2);
  }
  let result = [];
  let carry = 0;
  for (let i = arr1.length - 1; i >= 0 || carry !== 0; i--) {
    let v1 = i >= 0 ? arr1[i] : 0;
    let v2 = i >= 0 ? arr2[i] : 0;
    let bit = v1 + v2 + carry;
    if (bit < 0) {
      // bit = -1
      carry = 1;
      bit = 1;
    } else if (bit > 1) {
      // bit = 2,3
      carry = -1;
      bit -= 2;
    } else {
      // bit = 0,1,
      carry = 0;
    }
    result.unshift(bit);
  }
  if (result.length > 1 && result[0] === 0) {
    if (result.every((x) => x === 0)) {
      result.length = 1;
    } else {
      let count = 0;
      for (let i = 0; result[i] === 0; i++) {
        count++;
      }
      result = result.slice(count);
    }
  }
  return result;
};
// @lc code=end
