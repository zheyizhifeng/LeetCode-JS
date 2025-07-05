/*
 * @lc app=leetcode.cn id=1049 lang=javascript
 * @lcpr version=30201
 *
 * [1049] 最后一块石头的重量 II
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 *  这是一个同归于尽抵消场景，分为两部分集合, 剩余质量一定是两个集合的总和做差，为了剩余重量更小，两边的集合要更平衡【尽量和相等, 有可能无法相等】，问题转化为： 容量为 sum/2 的 0-1 背包，如何尽可能装满;
 * 
 * 最终剩余重量 = 总重量 - 2×（某子集的和）。要使剩余最小，需让该子集的和尽可能接近总重量的一半。转化为 0-1 背包：容量为 sum/2，求能装的最大子集和。
 * 
 * 而且已知递归会超时, 只能进一步优化
 */
var lastStoneWeightII = function (stones) {
  const sum = stones.reduce((a, b) => a + b);
  let target = sum / 2;
  const max = Math.max(...stones);
  // 最大值超过一半了
  if (max >= target) return (max - target) * 2;

  // stones[i] < target
  target = Math.floor(target);
  const dp = Array(target + 1).fill(0);
  // dp[j] 表示容量不超过 j 的最大子集和
  for (let stone of stones) {
    for (let j = target; j >= stone; j--) {
      dp[j] = Math.max(dp[j], dp[j - stone] + stone);
    }
  }

  return sum - 2 * dp[target];
};
// @lc code=end



/*
// @lcpr case=start
// [2,7,4,1,8,1]\n
// @lcpr case=end

// @lcpr case=start
// [31,26,33,21,40]\n
// @lcpr case=end

 */
