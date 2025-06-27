// @algorithm @lc id=100319 lang=javascript
// @title er-cha-shu-de-shen-du-lcof
import * as a from 'algm';
import { TreeNode } from 'algm';
// @test([1,2,2,3,null,null,5,4,null,null,4])=4
// @test([1,2,2,3,null,null,5,4,null,null,4])=4
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
var calculateDepth = function (root) {
  if (!root) return 0;
  const result = [];
  const stack = [root];
  while (stack.length) {
    let levelSize = stack.length;
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
    result.push(row);
  }
  return result.length;
};
