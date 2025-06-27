// @algorithm @lc id=100318 lang=javascript
// @title shu-zu-zhong-de-ni-xu-dui-lcof
import * as a from 'algm';
/**
 * @param {number[]} record
 * @return {number}
 */
var reversePairs = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) sum++;
    }
  }
  return sum;
};
