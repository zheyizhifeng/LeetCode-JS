/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var buildTree = function (inorder, postorder) {
  let map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }
  function build(li, ri, lp, rp) {
    if (li > ri) return null;
    const rootVal = postorder[rp];
    const rootIndex = map.get(rootVal);
    const root = new TreeNode(rootVal);
    root.left = build(li, rootIndex - 1, lp, rootIndex - 1 - li + lp);
    root.right = build(rootIndex + 1, ri, rp - 1 + rootIndex + 1 - ri, rp - 1);
    return root;
  }
  return build(0, inorder.length - 1, 0, postorder.length - 1);
};
const inorder = [9, 3, 15, 20, 7];
const postorder = [9, 15, 7, 20, 3];
buildTree(inorder, postorder);
// @lc code=end
