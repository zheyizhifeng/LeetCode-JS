/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  /**
   * 递归
   * 
  
  let result = [];
  function traverse(root) {
    if (!root) return [];
    traverse(root.left);
    traverse(root.right);
    result.push(root.val);
  }
  traverse(root);
  return result; */

  /**
   * 迭代
   *
   */
  if (!root) return [];
  const result = [];
  const stack = [root];
  // 后序遍历是父节点需要最后被遍历。但其实可以跟前序遍历的实现方式上差不多，
  // 只不过在插入数组中，我们总是在头部插入，这样先被插入的节点值一定是相对于左右孩子后面的。
  // 后序：left->right->root, 所以按照unshift，顺序应该是root->left->right
  while (stack.length > 0) {
    const node = stack.pop();
    result.unshift(node.val);
    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
  }
  return result;

  /**
   * 迭代，带有visited标志位
   * 
  const result = [];
  const stack = [];
  if (!root) return [];
  stack.push({
    node: root,
    visited: false,
  });
  while (stack.length > 0) {
    const { node, visited } = stack.pop();
    if (visited) {
      result.push(node.val);
    } else {
      // left->right->root => stack: root->right->left
      stack.push({
        node,
        visited: true,
      });
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
    }
  }
  return result */
};
// @lc code=end
