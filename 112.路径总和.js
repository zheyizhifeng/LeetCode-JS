/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  // PS: 根节点 => 叶子节点的总和
  if (!root) return false;
  if (!root.left && !root.right && root.val === sum) return true;
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};
// @lc code=end
