/*
 * @lc app=leetcode.cn id=698 lang=javascript
 * @lcpr version=30201
 *
 * [698] 划分为k个相等的子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * 1. 排序（降序）
将数组从大到小排序，优先处理大元素。这样可以快速排除无法凑出target的情况（例如，大元素无法放入当前子集时，直接跳过后续更小的元素）。

2. 已使用元素记录（used数组）
通过used[i]标记元素是否已被选入子集，避免重复使用同一元素。

3. 递归终止条件
 找到k个子集​：当count === k时，检查是否所有元素都被使用（此时curSum应为0，因为最后一个子集的和刚好是target）。
 当前子集和达到target​：重置curSum为0，count加1，从索引0重新开始搜索下一个子集。

4. 剪枝优化
 跳过已使用的元素​：避免重复使用同一元素。
 跳过重复元素​：如果当前元素和前一个元素相同，且前一个未被使用，说明前一个元素已被尝试过，跳过当前元素以避免重复组合。
 提前终止无效路径​：如果当前元素加入后超过target，后续更小的元素也会超过，直接跳过。
 首元素剪枝​：如果当前元素是子集的第一个元素（curSum === 0），但加入后无法找到解，说明后续更小的元素也无法凑出target，直接返回false。

 */
var canPartitionKSubsets = function (nums, k) {
  const sum = nums.reduce((a, b) => a + b);
  // 总和必须要能整除K
  if (sum % k !== 0) return false;
  const target = sum / k;
  // 单个元素不能大于 sum / k
  if (nums.some(n => n > target)) return false;

  nums.sort((a, b) => b - a) // 降序排序，优先处理大元素，减少无效递归
  const n = nums.length;
  // 记录元素是否被使用过
  const used = Array(n).fill(false);

  // 递归函数定义：
  // curSum: 当前子集的和
  // start: 当前搜索的起始索引（避免重复组合）
  // count: 已找到的有效子集数
  function dfs(curSum, start, count) {
    // 终止条件1：已找到k个子集，且所有元素被使用（总和为k*target）
    if (count === k) {
      return curSum === 0; // 最后一个子集的和应为target（curSum初始为0时已处理完所有元素）
    }
    // 终止条件2：当前子集和已达到target，开始找下一个子集
    if (curSum === target) {
      // 重置curSum为0，count+1，从索引0重新开始搜索
      return dfs(0, 0, count + 1);
    }
    for (let i = start; i < n; i++) {
      // 跳过已使用的元素
      if (used[i]) continue;
      // 剪枝：如果当前元素和前一个元素相同，且前一个未被使用，跳过（避免重复组合）
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
      // 剪枝：如果当前元素加入后超过target，跳到下一个元素；
      if (curSum + nums[i] > target) continue;

      // 选当前元素
      used[i] = true;
      // 递归搜索：当前和增加nums[i]，从i+1开始（避免同一子集重复选元素）
      if (dfs(curSum + nums[i], i + 1, count)) {
        return true
      }
      // 回溯：撤销选择
      used[i] = false;
      // 剪枝：如果当前元素是子集的第一个元素（curSum为0），但加入后无法找到解，直接返回false
      if (curSum === 0) return false;
    }
    return false;
  }
  return dfs(0, 0, 0)
};
// @lc code=end

/*
// @lcpr case=start
// [4, 3, 2, 3, 5, 2, 1]\n4\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4]\n3\n
// @lcpr case=end

 */
