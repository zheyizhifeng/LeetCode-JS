/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
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
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  const queue = [root];
  const result = [];
  let isEvenRow = true; // start from row 0
  while (queue.length > 0) {
    const levelSize = queue.length;
    const row = [];
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      row.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(isEvenRow ? row : row.reverse());
    isEvenRow = !isEvenRow;
  }
  return result;
};
// @lc code=end
