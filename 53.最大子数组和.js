/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // A. LeetCode 官方分治思路
  // lSum 表示[l,r]区间以l为左端点的最大子数组和
  // rSum 表示[l,r]区间以r为右端点的最大子数组和
  // mSum 表示[l,r]区间的最大子数组和
  // iSum 表示[l,r]区间的所有元素和
  /* function pushUp(left, right) {
    // left和right是各占一半的区间
    const iSum = left.iSum + right.iSum;
    const lSum = Math.max(left.lSum, left.iSum + right.lSum);
    const rSum = Math.max(right.rSum, right.iSum + left.rSum);
    const mSum = Math.max(left.mSum, right.mSum, left.rSum + right.lSum);
    return {
      lSum,
      rSum,
      iSum,
      mSum,
    };
  }
  function getInfo(a, l, r) {
    // 查询数组a的[l,r]区间的最大子数组和
    if (l === r) {
      return {
        lSum: a[l],
        rSum: a[l],
        mSum: a[l],
        iSum: a[l],
      };
    } else {
      const m = (l + r) >> 1; // 二分
      const leftPart = getInfo(a, l, m);
      const rightPart = getInfo(a, m + 1, r);
      return pushUp(leftPart, rightPart);
    }
  }
  return getInfo(nums, 0, nums.length - 1).mSum; */

  // B. 动态规划
  /* const n = nums.length;
  const dp = Array(n).fill(0);
  let max = -Infinity;
  // dp[i] 表示以nums[i]为末尾元素的连续子数组的最大和
  for (let i = 0; i < n; i++) {
    if (i === 0) dp[i] = nums[i];
    else {
      if (dp[i - 1] < 0) {
        dp[i] = nums[i];
      } else {
        dp[i] = dp[i - 1] + nums[i];
      }
    }
    if (dp[i] > max) {
      max = dp[i]
    }
  }
  return max; */

  // C. 另一种二分思路，更好理解
  /* 分治法的思路是这样的，其实也是分类讨论。
  连续子序列的最大和主要由这三部分子区间里元素的最大和得到：
  第 1 部分：子区间 [left, mid]；
  第 2 部分：子区间 [mid + 1, right]；
  第 3 部分：包含子区间 [mid , mid + 1] 的子区间，即 nums[mid] 与 nums[mid + 1] 一定会被选取。
  对这三个部分求最大值即可。 
  说明：考虑第 3 部分跨越两个区间的连续子数组的时候，由于 nums[mid] 与 nums[mid + 1] 一定会被选取，可以从中间向两边扩散，扩散到底 选出最大值
  */
  const len = nums.length;
  if (len === 0) return 0;
  return maxSubArraySum(nums, 0, len - 1);

  function maxCrossingSum(nums, left, mid, right) {
    // 一定会包含 nums[mid] 这个元素
    let sum = 0;
    let leftSum = -Infinity;
    // 左半边包含 nums[mid] 元素，最多可以到什么地方
    // 走到最边界，看看最值是什么
    // 计算以 mid 结尾的最大的子数组的和
    for (let i = mid; i >= left; i--) {
      sum += nums[i];
      if (sum > leftSum) {
        leftSum = sum;
      }
    }

    sum = 0;
    let rightSum = -Infinity;
    // 右半边不包含 nums[mid] 元素，最多可以到什么地方
    // 计算以 mid+1 开始的最大的子数组的和
    for (let i = mid + 1; i <= right; i++) {
      sum += nums[i];
      if (sum > rightSum) {
        rightSum = sum;
      }
    }

    return leftSum + rightSum;
  }

  function maxSubArraySum(nums, left, right) {
    if (left === right) return nums[left];
    const mid = left + ((right - left) >> 1);
    return Math.max(
      maxSubArraySum(nums, left, mid),
      maxSubArraySum(nums, mid + 1, right),
      maxCrossingSum(nums, left, mid, right)
    );
  }
};
// @lc code=end
