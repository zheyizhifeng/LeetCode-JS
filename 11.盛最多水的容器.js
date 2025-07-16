/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let l = 0;
  let r = height.length - 1;
  let maxCapacity = 0;
  while (l < r) {
    // [l,r] 之间的矩形面积
    let curS = Math.min(height[l], height[r]) * (r - l);
    if (curS > maxCapacity) maxCapacity = curS;
    if (height[l] < height[r]) {
      // 左边小于右边，短板是左边，
      // 假设移动 r 指针
      // height[r-1] >= height[l], 短板不变，但长度减少，总容量减少
      // height[r-1] < height[l], 短板更小，长度也更小，总容量更小，
      // 所以，一定要移动 l 指针
      l++;
    } else {
      r--;
    }
  }
  return maxCapacity;
};
// @lc code=end
