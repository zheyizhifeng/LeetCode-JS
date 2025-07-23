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
var firstMissingPositive = function(nums) {
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        // 如果当前学生的学号在 [1,n] 中，但（真身）没有坐在正确的座位上
        while (1 <= nums[i] && nums[i] <= n && nums[i] !== nums[nums[i] - 1]) {
            // 那么就交换 nums[i] 和 nums[j]，其中 j 是 i 的学号
            const j = nums[i] - 1; // 减一是因为数组下标从 0 开始
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }

    // 找第一个学号与座位编号不匹配的学生
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

    // 所有学生都坐在正确的座位上
    return n + 1;
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
