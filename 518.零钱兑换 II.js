// @algorithm @lc id=518 lang=javascript 
// @title coin-change-ii
// @test(5,[1,2,5])=4
// @test(3,[2])=0
// @test(10,[10])=1
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    const dp = Array(amount + 1).fill(0);
    dp[0] = 1;
    // 先遍历硬币，再遍历金额,就可以避免重复
    /**
让我用一个具体的例子来解释为什么这种循环顺序能避免重复计算。
我们以 amount = 5, coins = [1,2,5] 为例。
关键点：
外层循环是硬币：这确保了硬币的使用顺序是固定的，比如总是先使用1，再使用2，最后使用5。
内层循环是金额：对于每个硬币，我们计算它能组成的所有可能的金额。

第一轮：coin = 1
i=1: dp[1] += dp[0] => dp = [1, 1, 0, 0, 0, 0]
i=2: dp[2] += dp[1] => dp = [1, 1, 1, 0, 0, 0]
i=3: dp[3] += dp[2] => dp = [1, 1, 1, 1, 0, 0]
i=4: dp[4] += dp[3] => dp = [1, 1, 1, 1, 1, 0]
i=5: dp[5] += dp[4] => dp = [1, 1, 1, 1, 1, 1]
此时，dp表示只使用1元硬币时，各个金额的组合数。比如，dp[5] = 1，表示只有一种组合：1+1+1+1+1。

第二轮：coin = 2
i=2: dp[2] += dp[0] => dp = [1, 1, 2, 1, 1, 1] (2 = 1+1 或 2)
i=3: dp[3] += dp[1] => dp = [1, 1, 2, 2, 1, 1] (3 = 1+1+1 或 1+2)
i=4: dp[4] += dp[2] => dp = [1, 1, 2, 2, 3, 1] (4 = 1+1+1+1 或 1+1+2 或 2+2)
i=5: dp[5] += dp[3] => dp = [1, 1, 2, 2, 3, 3] (5 = 1+1+1+1+1 或 1+1+1+2 或 1+2+2)

第三轮：coin = 5
i=5: dp[5] += dp[0] => dp = [1, 1, 2, 2, 3, 4] (5 = 1+1+1+1+1 或 1+1+1+2 或 1+2+2 或 5)

     */
    for (let n of coins) {
        for (let i = n; i <= amount; i++) {
            dp[i] += dp[i - n]
        }
        // 此时，dp表示只使用 n 元硬币时，各个金额的组合数。
        // 比如，dp[5] = 1，表示只有一种组合：1+1+1+1+1。
        console.log('dp >>> ', dp);
    }
    return dp[amount]
};