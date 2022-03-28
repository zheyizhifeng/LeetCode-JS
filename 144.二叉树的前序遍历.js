/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  /**
   * 递归方案
   * 
  let result = [];
  function traverse(root) {
    if (!root) return [];
    result.push(root.val);
    traverse(root.left);
    traverse(root.right);
  }
  traverse(root);
  return result; */

  /**
   * 迭代方案 I，不带visited标志
   * 
  const result = [];
  const stack = [];
  if (root) {
    stack.push(root);
  }
  while (stack.length > 0) {
    const node = stack.pop();
    result.push(node.val);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
  return result; */

  /**
   * 迭代方案 II，带visited标志
   */
  let result = [];
  let stack = [];
  if (root) {
    stack.push({
      node: root,
      visited: false,
    });
  }
  while (stack.length > 0) {
    const { node, visited } = stack.pop();
    if (visited) {
      result.push(node.val);
    } else {
      // 前序 root->left->right 对应stack: right->left->root`
      if (node.right) {
        stack.push({
          node: node.right,
          visited: false,
        });
      }
      if (node.left) {
        stack.push({
          node: node.left,
          visited: false,
        });
      }
      stack.push({
        node,
        visited: true,
      });
    }
  }
  return result;
};
// @lc code=end
