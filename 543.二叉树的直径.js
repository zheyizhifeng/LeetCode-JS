/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
 * @return {number}
 */

var diameterOfBinaryTree = function (root) {
  let diameter = 0;
  function maxDepth(root) {
    if (!root) return 0;
    const leftMaxDepth = maxDepth(root.left);
    const rightMaxDepth = maxDepth(root.right);
    if (leftMaxDepth + rightMaxDepth > diameter) {
      diameter = leftMaxDepth + rightMaxDepth;
    }
    return Math.max(leftMaxDepth, rightMaxDepth) + 1;
  } // 边数 = 深度[节点数] - 1
  maxDepth(root);
  return diameter;
};
// @lc code=end
