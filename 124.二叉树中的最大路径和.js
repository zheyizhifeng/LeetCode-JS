/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
var maxPathSum = function (root) {
  let max = -Infinity;
  function sumOfTree(root) {
    // 以root为根节点的单边最大路径和
    if (!root) return 0;
    const leftSum = sumOfTree(root.left);
    const rightSum = sumOfTree(root.right);
    const maxRootSingle = Math.max(root.val, root.val + leftSum, root.val + rightSum);
    const sum = Math.max(maxRootSingle, root.val + leftSum + rightSum);
    max = Math.max(sum, max);
    return maxRootSingle;
  }
  sumOfTree(root);
  return max;
};
// @lc code=end
