// @algorithm @lc id=144 lang=javascript 
// @title binary-tree-preorder-traversal
import * as a from 'algm'
import { TreeNode } from 'algm'
// @test([1,null,2,3])=[1,2,3]
// @test([1,2,3,4,5,null,8,null,null,6,7,9])=[1,2,4,5,6,7,3,8,9]
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

var preorderTraversal = function (root) {
  const result = [];
  let stack = [root];
  // 前序：根->左->右,那么按照栈的结构，应该是
  // 栈顺序：右->左->根【根元素直接 push 到结果数组】
  if (!root) return result;
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
  return result;
};