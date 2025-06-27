/*
 * @lc app=leetcode.cn id=77 lang=javascript
 * @lcpr version=30201
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  
  const result = [];
  function backtrack(n, k, start, path) {
    if (path.length === k) {
      result.push([...path]);
      return;
    }
    for (let i = start; i <= n; i++) {
      path.push(i);
      backtrack(n, k, i + 1, path);
      path.pop();
    }
  }
  backtrack(n, k, 1, []);
  return result;
};
// @lc code=end

/*
// @lcpr case=start
// 4\n2\n
// @lcpr case=end

// @lcpr case=start
// 1\n1\n
// @lcpr case=end

 */
