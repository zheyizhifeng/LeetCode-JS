/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }
  function build(lp, rp, li, ri) {
    if (lp > rp) return null;
    let rootVal = preorder[lp];
    let rootIndexInorder = map.get(rootVal);
    const root = new TreeNode(rootVal);
    root.left = build(lp + 1, lp + rootIndexInorder - li, li, rootIndexInorder - 1);
    root.right = build(lp + rootIndexInorder - li + 1, rp, rootIndexInorder + 1, ri);
    return root;
  }

  return build(0, preorder.length - 1, 0, inorder.length - 1);
};
// @lc code=end
