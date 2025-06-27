/*
 * @lc app=leetcode.cn id=41 lang=javascript
 * @lcpr version=30201
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 思路：一个萝卜一个坑，nums[i] 就呆在 i-1 位置上
// 数组长度为 n,缺失的最小正整数一定在[1, n + 1]
// 核心比较：nums[i] === nums[ nums[i] - 1 ]
var firstMissingPositive = function (nums) {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    // 对1~nums.length范围内的元素进行安排
    // 已经出现在理想位置的，就不用交换
    while (nums[i] >= 1 && nums[i] <= n && nums[i] !== nums[nums[i] - 1]) {
      let j = nums[i] - 1;
      // 交换
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }
  for (let i = 0; i < n; i++) {
    // 第0个元素应该等于 1，
    // 第1个元素应该等于 2，
    // 找到第一个下标和数字不匹配的
    if (nums[i] !== i + 1) return i + 1;
  }
  return n + 1; // 发现元素 1~nums.length 占满了数组，一个没缺
};
// @lc code=end

/*
// @lcpr case=start
// [1,2,0]\n
// @lcpr case=end

// @lcpr case=start
// [3,4,-1,1]\n
// @lcpr case=end

// @lcpr case=start
// [7,8,9,11,12]\n
// @lcpr case=end

 */
