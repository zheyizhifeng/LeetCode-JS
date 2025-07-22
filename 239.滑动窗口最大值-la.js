/*
 * @lc app=leetcode.cn id=239 lang=javascript
 * @lcpr version=30201
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSlidingWindow(nums, k) {
    const deque = []; // 双端队列，存储「可能成为窗口最大值的元素的索引」
    const result = []; // 存储每个窗口的最大值

    for (let i = 0; i < nums.length; i++) {
        // 规则1：移除队首过期的索引（索引不在当前窗口范围内）
        // 当前窗口的左边界是 i - k + 1（当窗口形成时），所以队首索引必须 ≥ 左边界
        // 例如：窗口大小k=3，i=3时，窗口左边界是1（3-3+1=1），队首索引如果≤0则需要弹出
        while (deque.length && deque[0] < i - k + 1) {
            deque.shift(); // 弹出队首过期的索引
        }

        // 规则2：移除队尾所有比当前元素小的索引（这些元素不可能是后续窗口的最大值）
        // 因为当前元素 nums[i] 更大，且在窗口中存在更久（索引更大），所以队尾的这些索引可以安全删除
        while (deque.length && nums[deque[deque.length - 1]] <= nums[i]) {
            deque.pop(); // 弹出队尾较小的索引
        }

        // 规则3：将当前元素的索引加入队尾（此时队列仍保持单调递减）
        deque.push(i);

        // 当窗口形成后（i ≥ k-1），记录队首对应的最大值
        // 例如：k=3时，i=2（第三个元素）是第一个完整窗口的右边界
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
}
// @lc code=end



/*
// @lcpr case=start
// [1,3,-1,-3,5,3,6,7]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n
// @lcpr case=end

 */
