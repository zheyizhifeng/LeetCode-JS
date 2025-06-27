// @algorithm @lc id=145 lang=javascript
// @title binary-tree-postorder-traversal
import * as a from 'algm';
import { TreeNode } from 'algm';
// @test([1,null,2,3])=[3,2,1]
// @test([1,2,3,4,5,null,8,null,null,6,7,9])=[4,6,7,5,2,9,8,3,1]
// @test([])=[]
// @test([1])=[1]
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
  if (!root) return [];
  const result = [];
  const stack = [root];
  /**
   * 后序：左 右 根
   * 栈序：根 右 左
   * JS 的 unshift 可以实现头部插入
   */
  while(stack.length) {
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
};
