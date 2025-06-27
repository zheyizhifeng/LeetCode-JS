// @algorithm @lc id=236 lang=javascript
// @title lowest-common-ancestor-of-a-binary-tree
import * as a from 'algm';
import { TreeNode } from 'algm';
// @test([3,5,1,6,2,0,8,null,null,7,4],5,1)=3
// @test([3,5,1,6,2,0,8,null,null,7,4],5,4)=5
// @test([1,2],1,2)=1
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

/**
 * lowestCommonAncestor(root.left, p, q)：在左子树里找 p 或 q 的祖先，找到就返回那个节点，否则返回 null。
lowestCommonAncestor(root.right, p, q)：在右子树里找 p 或 q 的祖先，找到就返回那个节点，否则返回 null。

如果左子树找到了一个（比如 p），右子树找到了另一个（比如 q），那么当前节点就是最近公共祖先。
这说明 p 和 q 分别在当前节点的左右两棵子树里。
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root || root === p || root === q) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left && right) return root;
  return left ? left : right;
}
