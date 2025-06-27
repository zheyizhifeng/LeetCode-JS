/*
 * @lc app=leetcode.cn id=337 lang=javascript
 * @lcpr version=30201
 *
 * [337] 打家劫舍 III
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
  const memo = new Map();
  function dfs(root) {
    if (!root) return 0;
    if (memo.has(root)) {
      return memo.get(root);
    }
    // 偷 root, 能偷 root.left.left + root.left.right + root.right.left + root.right.right;
    let max1 = root.val;
    if (root.left) {
      max1 += dfs(root.left.left) + dfs(root.left.right);
    }
    if (root.right) {
      max1 += dfs(root.right.left) + dfs(root.right.right);
    }
    // 不偷 root, 可以偷 root.left + root.right
    let max2 = dfs(root.left) + dfs(root.right);
    const res = Math.max(max1, max2);
    memo.set(root, res);
    return res;
  }

  return dfs(root);
};
// @lc code=end

/*
// @lcpr case=start
// [3,2,3,null,3,null,1]\n
// @lcpr case=end

// @lcpr case=start
// [3,4,5,1,3,null,1]\n
// @lcpr case=end

 */
