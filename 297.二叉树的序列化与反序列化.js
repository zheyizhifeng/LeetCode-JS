// @algorithm @lc id=297 lang=javascript
// @title serialize-and-deserialize-binary-tree
import * as a from 'algm';
import { TreeNode } from 'algm';
// @test([1,2,3,null,null,4,5])=[1,2,3,null,null,4,5]
// @test([])=[]
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
/**
 * 先序遍历实现
 */
var serialize = function (root) {
  if (!root) return '';
  const result = [];
  function preTraverse(root) {
    if (!root) return root;
    result.push(root.val);
    if (root.left) {
      preTraverse(root.left);
    } else {
      result.push(null);
    }
    if (root.right) {
      preTraverse(root.right);
    } else {
      result.push(null);
    }
  }
  preTraverse(root);
  // console.log('result >>>', result)
  return result.toString();
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */

function buildTreeFromPreTraverse(list) {
  // list >>> [
  //   1, 2,    null, null,
  //   3, 4,    null, null,
  //   5, null, null
  // ]
  const rootVal = list.shift();
  if (!rootVal) {
    return null;
  }
  const root = new TreeNode(+rootVal);
  root.left = buildTreeFromPreTraverse(list);
  root.right = buildTreeFromPreTraverse(list);
  return root;
}
var deserialize = function (data) {
  const list = data.split(',')
  return buildTreeFromPreTraverse(list);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
