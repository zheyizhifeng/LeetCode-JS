/*
 * @lc app=leetcode.cn id=655 lang=javascript
 *
 * [655] 输出二叉树
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
 * @return {string[][]}
 */
var printTree = function (root) {
  if (!root) return [];
  function height(root) {
    if (!root) return 0;
    return Math.max(height(root.left), height(root.right)) + 1;
  }
  let depth = height(root);
  let width = 2 ** depth - 1;
  const result = Array.from(Array(depth), () => Array(width).fill(''));
  function traverse(root, row, l, r) {
    if (root) {
      let col = parseInt((l + r) / 2);
      result[row][col] += root.val;
      traverse(root.left, row + 1, l, col - 1);
      traverse(root.right, row + 1, col + 1, r);
    }
  }
  traverse(root, 0, 0, width - 1);
  return result;
};
// @lc code=end
