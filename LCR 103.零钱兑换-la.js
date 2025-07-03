/*
 * @lc app=leetcode.cn id=LCR 103 lang=javascript
 * @lcpr version=30201
 *
 * [LCR 103] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    // dp[i] 表示凑出总额为 i 需要的最少硬币个数
    dp[0] = 0;
    // 最终求 dp[amount]
    let minCount = 0;
    // for(let n of coins) {
    //     dp[n] = 1;
    // }
    for(let i=1;i<=amount;i++) {
        for(let n of coins) {
            if (i<n) {
                // 面值过大
                continue;
            } else {
                // 刚好凑够
                dp[i] = Math.min(dp[i-n] + 1, dp[i])
            }
         }
    }
    // console.log('dp >>>', dp);
    return dp[amount] === Infinity ? -1 : dp[amount]
};
// @lc code=end



/*
// @lcpr case=start
// [1, 2, 5]\n11\n
// @lcpr case=end

// @lcpr case=start
// [2]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n0\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1]\n2\n
// @lcpr case=end

 */

