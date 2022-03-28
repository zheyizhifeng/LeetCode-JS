/*
 * @lc app=leetcode.cn id=965 lang=javascript
 *
 * [965] 单值二叉树
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function (root) {
  if (!root) return true;
  const l = root.left;
  const r = root.right;
  if (!l && !r) {
    return true;
  }
  if (l && !r) {
    return root.val === l.val && isUnivalTree(l);
  } else if (r && !l) {
    return root.val === r.val && isUnivalTree(r);
  } else {
    return root.val === l.val && l.val === r.val && isUnivalTree(l) && isUnivalTree(r);
  }
};
// @lc code=end
