/*
 * @lc app=leetcode.cn id=1448 lang=javascript
 *
 * [1448] 统计二叉树中好节点的数目
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
// const {
//   transferListToArray,
//   getTreeFromArray,
// } = require('./binary-tree-utils');
var goodNodes = function (root) {
  let count = 0;
  function traverse(root, max = -Infinity) {
    if (!root) return;
    if (root.val >= max) {
      count++;
    }
    traverse(root.left, Math.max(max, root.val));
    traverse(root.right, Math.max(max, root.val));
  }
  traverse(root, -Infinity);
  return count;
};
// const root = getTreeFromArray([3, 1, 4, 3, null, 1, 5]);
// goodNodes(root);
// @lc code=end
