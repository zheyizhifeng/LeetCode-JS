/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  /* const dp = Array(nums.length).fill(1);
  // dp[i] 表示以 nums[i] 这个数结尾的最长递增子序列的长度。O(n^2)

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  let res = 0;
  for (let i = 0; i < dp.length; i++) {
    res = Math.max(res, dp[i]);
  }
  return res; */

  // /////////////////////////////////////////
  /* 
  我们定义一个 dp 数组，其中 dp[k]存储长度为k+1的最长递增子序列的最后一个数字。
  1. 我们遍历每一个位置 i，如果 其对应的数字大于dp数组中所有数字的值，那么我们把它放在 dp 数组尾部，表示最长递增子序列长度加 1；
  2. 如果我们发现这个数字在dp数组中比数字a大、比数字 b 小，则我们将b更新为此数字，使得之后构成递增序列的可能性增大。以这种方式维护的dp数组永远是递增的，因此可以用二分查找加速搜索。
  */
  // 其中 dp[k]存储长度为k+1的最长递增子序列的最后一个数字。
  // dp[0]表示长度为1的最长递增子序列的最后数字
  let n = nums.length;
  if (n <= 1) {
    return n;
  }
  let tail = [nums[0]]; //存放最长上升子序列数组
  for (let i = 0; i < n; i++) {
    if (nums[i] > tail[tail.length - 1]) {
      //当nums中的元素比tail中的最后一个大时 可以放心push进tail
      tail.push(nums[i]);
    } else {
      //否则进行二分查找
      let left = 0;
      let right = tail.length - 1;
      while (left < right) {
        let mid = left + ((right - left) >> 1);
        if (tail[mid] < nums[i]) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }
      tail[left] = nums[i]; //将nums[i]放置到合适的位置，此时前面的元素都比nums[i]小
    }
  }
  return tail.length;
};
// @lc code=end
