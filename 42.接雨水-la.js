/*
 * @lc app=leetcode.cn id=42 lang=javascript
 * @lcpr version=30201
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 * water[i] = min(
           # 左边最高的柱子
           max(height[0..i]),
           # 右边最高的柱子
           max(height[i..end])
        ) - height[i]
 */
var trap = function (height) {
  const n = height.length;
  if (n < 3) return 0;
  let res = 0;
  const l_max = Array(n).fill(0);
  const r_max = Array(n).fill(0)
  l_max[0] = height[0];
  r_max[n - 1] = height[n - 1];

  for (let i = 1; i < n; i++) {
    l_max[i] = Math.max(height[i], l_max[i - 1]);
  }
  for (let i = n - 2; i >= 0; i--) {
    r_max[i] = Math.max(height[i], r_max[i + 1]);
  }
  for (let i = 1; i < n - 1; i++) {
    res += Math.min(l_max[i], r_max[i]) - height[i]
  }
  return res;
};
// @lc code=end



/*
// @lcpr case=start
// [0,1,0,2,1,0,1,3,2,1,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [4,2,0,3,2,5]\n
// @lcpr case=end

 */
