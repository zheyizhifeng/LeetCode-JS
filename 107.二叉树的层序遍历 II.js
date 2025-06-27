// @algorithm @lc id=107 lang=javascript
// @title binary-tree-level-order-traversal-ii
import * as a from 'algm';
import { TreeNode } from 'algm';
// @test([1,2,3,4,5])=[[4,5],[2,3],[1]]
// @test([3,9,20,null,null,15,7])=[[15,7],[9,20],[3]]
// @test([1])=[[1]]
// @test([])=[]
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (!root) return [];
  const result = [];
  const stack = [root];
  while (stack.length) {
    const levelSize = stack.length;
    let row = [];
    for (let i = 0; i < levelSize; i++) {
      const node = stack.shift();
      row.push(node.val);
      if (node.left) {
        stack.push(node.left);
      }
      if (node.right) {
        stack.push(node.right);
      }
    }    
    result.unshift(row);
  }
  return result;
};
