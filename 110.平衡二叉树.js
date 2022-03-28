/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function (root) {
  function maxHeight(root) {
    if (!root) return 0;
    const leftDepth = maxHeight(root.left);
    const rightDepth = maxHeight(root.right);
    if (Math.abs(leftDepth - rightDepth) > 1 || leftDepth < 0 || rightDepth < 0) {
      return -1;
    }
    return Math.max(leftDepth, rightDepth) + 1;
  }
  return maxHeight(root) >= 0;
};
// @lc code=end
