/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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

/**
 * 递归版本
 * 
var inorderTraversal = function (root) {
  let result = [];
  function traverse(root) {
    if (!root) return [];
    traverse(root.left);
    result.push(root.val);
    traverse(root.right);
  }
  traverse(root);
  return result;
}; */

/**
 * 迭代版本 I，不带visited标志
 */
var inorderTraversal = function (root) {
  if (!root) return [];
  let result = [];
  let stack = [];
  // 非递归遍历的思路是将当前结点压入栈，然后将左子树当做当前结点，如果当前结点为空，将双亲结点取出来，将值保存进数组，然后将右子树当做当前结点，进行循环。
  while (stack.length > 0 || root) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      // 此时左子树为null, stack栈顶元素即为parent节点
      const node = stack.pop();
      result.push(node.val);
      root = node.right;
    }
  }
  return result;
};

/**
 * 迭代版本 II, 带有visited标志
 * 
var inorderTraversal = function (root) {
  let result = [];
  let stack = [];
  if (root) {
    stack.push({
      node: root,
      visited: false,
    });
  }
  // 遍历顺序 左->根->右, stack入栈顺序 右->根->左
  while (stack.length > 0) {
    const { node, visited } = stack.pop();
    if (visited) {
      result.push(node.val);
    } else {
      if (node.right) {
        stack.push({
          node: node.right,
          visited: false,
        });
      }
      stack.push({
        node,
        visited: true,
      });
      if (node.left) {
        stack.push({
          node: node.left,
          visited: false,
        });
      }
    }
  }
  return result;
}; */
// @lc code=end
