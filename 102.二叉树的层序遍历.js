/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
/* var levelOrder = function (root) {
  if (!root) return [];

  function levelOfTree(root) {
    if (!root) return 0;
    return Math.max(levelOfTree(root.left), levelOfTree(root.right)) + 1;
  }
  let height = levelOfTree(root);
  const result = Array.from(Array(height), () => []);
  function traverse(node, row) {
    if (row < height) {
      result[row].push(node.val);
      node.left && traverse(node.left, row + 1);
      node.right && traverse(node.right, row + 1);
    }
  }
  traverse(root, 0);
  return result;
}; */

var levelOrder = function (root) {
  if (!root) return [];
  const queue = [root];
  const result = [];
  while (queue.length > 0) {
    const levelSize = queue.length;
    const level = [];
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift(); // 先进先出
      level.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(level);
  }
  return result;
};
// @lc code=end
