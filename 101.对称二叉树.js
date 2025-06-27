// @algorithm @lc id=101 lang=javascript 
// @title symmetric-tree
import * as a from 'algm'
import { TreeNode } from 'algm'
// @test([9,-42,-42,null,76,76,null,null,13,null,13])=false
// @test([9,-42,-42,null,76,76,null,null,13,null,13])=false
// @test([1,2,2,3,4,4,3])=true
// @test([1,2,2,null,3,null,3])=false
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // 尝试使用迭代实现
    if (!root) return true;
    const stack = [[root.left, root.right]];
    while(stack.length) {
      const [left, right] = stack.shift();
      if (left && !right) return false;
      if (!left && right) return false;
      if (!left && !right) {
        continue
      };
      if (left.val !== right.val) return false;
      stack.push([left.left, right.right])
      stack.push([left.right, right.left])
    }
    return true;
};