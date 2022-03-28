/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  if (!root) return [];
  const result = [];
  // 路径: path
  // 选择列表：同层节点组成的列表
  // 终止条件：!node.left && !node.right
  function backtrace(path = '', node) {
    if (!node.left && !node.right) {
      path += node.val;
      result.push(path);
    } else {
      path += node.val + '->';
      node.left && backtrace(path, node.left);
      node.right && backtrace(path, node.right);
    }
  }
  backtrace('', root);
  return result;
};
// @lc code=end
