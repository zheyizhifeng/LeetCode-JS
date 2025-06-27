// @algorithm @lc id=260 lang=javascript
// @title single-number-iii
import * as a from 'algm';
// @test([1,2,1,3,2,5])=[3,5]
// @test([-1,0])=[-1,0]
// @test([0,1])=[1,0]
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  // 假设结果result 为 [a,b]
  // 得到所有异或的结果 xor = a^b
  // a和b是不同数字, xor 一定在某一bit 为 1
  let xor = nums.reduce((a, b) => a ^ b);
  let pos = 0;
  while ((xor & 1) === 0) {
    pos++;
    xor = xor >> 1;
  }

  // 按照第 pos 位为 0 和 1 对数组分组
  let a = 0;
  let b = 0;
  // 比对数组每个元素的第 pos 为
  for (let n of nums) {
    if (((n >> pos) & 1) === 1) {
      // console.log('pos 位为 1, n >>>', n, n.toString(2))
      a = a ^ n;
    } else {
      b = b ^ n;
    }
  }
  return [a, b];
};
