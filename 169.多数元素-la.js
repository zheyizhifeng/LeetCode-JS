/*
 * @lc app=leetcode.cn id=169 lang=javascript
 * @lcpr version=30201
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // 额外空间解决
    const map = new Map();
    let maxEle;
    let max = -Infinity;
    for(let n of nums) {
      map.set(n, map.has(n) ? map.get(n) + 1 : 1);
      let count = map.get(n);
      if (count > max) {
        max = count;
        maxEle = n;
      }
    }
    return maxEle
};
// @lc code=end



/*
// @lcpr case=start
// [3,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [2,2,1,1,1,2,2]\n
// @lcpr case=end

 */
