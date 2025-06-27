/*
 * @lc app=leetcode.cn id=236 lang=javascript
 * @lcpr version=30201
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const parent = new Map();
  // 1. DFS 记录每个节点的父节点
  function dfs(root, par) {
    if (!root) return;
    parent.set(root, par);
    dfs(root.left, root);
    dfs(root.right, root);
  }
  dfs(root, null);

  // 2. 记录p 的所有祖先
  const visited = new Set();
  while (p) {
    visited.add(p);
    p = parent.get(p);
  }
  // 3. 从 q 开始往上跳，遇到第一个 visited 的就是 LCA
  while (q) {
    if (visited.has(q)) return q;
    q = parent.get(q);
  }
  return null;
};
// @lc code=end

/*
// @lcpr case=start
// [3,5,1,6,2,0,8,null,null,7,4]\n5\n1\n
// @lcpr case=end

// @lcpr case=start
// [3,5,1,6,2,0,8,null,null,7,4]\n5\n4\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n1\n2\n
// @lcpr case=end

 */
