/*
 * @lc app=leetcode.cn id=377 lang=javascript
 * @lcpr version=30201
 *
 * [377] 组合总和 Ⅳ
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  const n = nums.length;
  // 记忆化缓存：key为"curSum,start"，value为组合数
  const memo = new Map();
  // 升序排序，便于剪枝
  nums.sort((a, b) => a - b);
  // 最小值都比 target 大
  if (nums[0] > target) return 0;

  // 完全背包回溯
  function dfs(curSum, startIndex) {
    // 找到一个有效组合
    if (curSum === target) {
      return 1;
    }
    // 超过target，无效
    if (curSum > target) return 0;

    const key = `${curSum},${startIndex}`;
    // 直接返回缓存结果
    if (memo.has(key)) return memo.get(key);

    let count = 0;
    for (let i = startIndex; i < n; i++) {
      // 剪枝：升序排列，当前元素已超target，后续更大元素必然超，直接终止循环
      if (curSum + nums[i] > target) break;

      count += dfs(curSum + nums[i], 0);
    }
    memo.set(key, count);
    return count;
  }

  return dfs(0, 0);
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3]\n4\n
// @lcpr case=end

// @lcpr case=start
// [9]\n3\n
// @lcpr case=end

 */
