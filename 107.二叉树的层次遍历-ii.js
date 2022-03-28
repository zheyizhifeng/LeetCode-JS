/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @return {number[][]}
 */
/* var levelOrderBottom = function (root) {
  function height(tree) {
    if (!tree) return 0;
    return Math.max(height(tree.left), height(tree.right)) + 1;
  }
  const depth = height(root);
  const result = Array.from(Array(depth), () => []);
  function traverse(tree, row = 1) {
    if (!tree) return;
    result[depth - row].push(tree.val);
    traverse(tree.left, row + 1);
    traverse(tree.right, row + 1);
  }
  traverse(root, 1);
  return result;
};
 */
var levelOrderBottom = function (root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    const level = [];
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.unshift(level);
  }
  return result;
};
// @lc code=end
