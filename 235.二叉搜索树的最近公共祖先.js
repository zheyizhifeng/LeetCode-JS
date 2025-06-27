// @algorithm @lc id=235 lang=javascript
// @title lowest-common-ancestor-of-a-binary-search-tree
import * as a from 'algm';
import { TreeNode } from 'algm';
// @test([6,2,8,0,4,7,9,null,null,3,5],2,8)=6
// @test([6,2,8,0,4,7,9,null,null,3,5],2,4)=2
// @test([2,1],2,1)=2
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
var lowestCommonAncestor = function (root, p, q) {
  // 根节点一定是一个公共祖先，但并不一定是最近的
  // 二叉搜索树是有严格有序的，考虑二分？
  if (!root) return root;
  // if (root === p || root === q) return root;
  let pVal = p.val;
  let qVal = q.val;
  let rootVal = root.val;
  // if ((rootVal > pVal && rootVal < qVal) || (rootVal > qVal && rootVal < pVal)) {
  //   // p\q 分布在两侧
  //   return root;
  // }
  // 二分筛掉一半;
  if (pVal < rootVal && qVal < rootVal) {
    // 都在左子树
    return lowestCommonAncestor(root.left, p, q);
  }
  if (pVal > rootVal && qVal > rootVal) {
    // 都在右子树
    return lowestCommonAncestor(root.right, p, q);
  }
  return root;
};
