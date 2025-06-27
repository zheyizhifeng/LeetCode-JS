// @algorithm @lc id=100317 lang=javascript
// @title er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof
import * as a from 'algm';
import { TreeNode } from 'algm';
// @test([5,4,8,11,null,13,4,7,2,null,null,5,1],22)=[[5,4,11,2],[5,8,4,5]]
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
 * @param {number} target
 * @return {number[][]}
 */
var pathTarget = function (root, target) {
  const result = [];
  function dfs(path, root, restTarget) {
    if(!root) return;
    if (!root.left && !root.right) {
      if (root.val === restTarget) {
        result.push(path.concat(root.val))
      }
      return;
    }
    dfs([...path, root.val], root.left, restTarget - root.val);
    dfs([...path, root.val], root.right, restTarget - root.val);
  }
  dfs([], root, target);
  return result;
};
