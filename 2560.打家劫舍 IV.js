// @algorithm @lc id=2690 lang=javascript 
// @title house-robber-iv
import * as a from 'algm'
// @test([2,3,5,9],2)=5
// @test([2,7,9,3,1],2)=2
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function (nums, k) {
  // 如果能偷的房子中最大金额为 x，能否选出至少 k 个不相邻的房子，且每个房子的金额 ≤ x？
  let l = Math.min(...nums); // 单间房能偷到的最小值
  let r = Math.max(...nums); // 单间房能偷到的最大值
  let ans = r;
  
  while (l <= r) {
    let mid = l + ((r - l) >> 1);
    // 看看 x = mid 时候能偷多少间屋子,
    // 如果偷的屋子 < k，说明，x 小了，
    // 如果偷的屋子 >= k,说明 x 大了，
    // 逐步逼近
    let cnt = 0; // 当前的偷的屋子总数
    let i = 0; // 屋子编号
    while (i < nums.length) {
      if (nums[i] <= mid) {
        // 符合条件，可偷
        cnt++;
        i += 2; // 跳过相邻的
      } else {
        i++; // 当前的不符合要求
      }
    }
    if (cnt < k) {
      l = mid + 1; // 需要更大的最大金额
    } else {
      ans = mid;
      r = mid - 1; // 尝试更小的最大金额
    }
  }
  return ans;
};