/*
 * @lc app=leetcode.cn id=470 lang=javascript
 * @lcpr version=30201
 *
 * [470] 用 Rand7() 实现 Rand10()
 */

// @lc code=start
/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
/**
 * 条件
 * rand7() => 均匀 [1,2,3,4,5,6,7]
 * 
 * 目标
 * rand10() => 均匀 [1,2,3,4,5,6,7,8,9,10]
 * 
 * 思路：扩大样本空间，再「裁剪」出均匀区间
直接用 rand7() 一次只能生成 1-7，不够覆盖 1-10。但我们可以多次调用 rand7() 组合出更大的样本空间，再从中筛选出一个能被 10 整除的区间，保证均匀性。
 * 1. 直接 rand7() * rand7() => 不均匀, 比如6的概率[2,3] 和 [3,2]比 1[1,1] 和 49[7,7]高
 * 2. rand7() * 7 => [7,14,21,28,35,42,49],
 * 3. (rand7() - 1) * 7 => [0,7,14,21,28,35,42]
 * 4. 再加上 rand7() => [1,2,3,4,5,6,7] + [8,9,10,11,12,13,14] + ... + [43,44,45,46,47,48,49]
 * 5. 略去 > 40 的 41~49，对[1~40] 均匀映射到 [1~10], n % 10 + 1
 */
var rand10 = function () {
  let n = (rand7() - 1) * 7 + rand7();
  while (n > 40) {
    n = (rand7() - 1) * 7 + rand7();
  }
  return n % 10 + 1;
};
// @lc code=end



/*
// @lcpr case=start
// 1\n
// @lcpr case=end

// @lcpr case=start
// 2\n
// @lcpr case=end

// @lcpr case=start
// 3\n
// @lcpr case=end

 */
