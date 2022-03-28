/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一个树的子树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
  // 子树的充要条件：
  // s\t相等
  // 子树t在s的左子树上
  // 子树t在s的右子树上
  function isSameTree(t1, t2) {
    if (!t1 && !t2) return true;
    return t1 && t2 && t1.val === t2.val && isSameTree(t1.left, t2.left) && isSameTree(t1.right, t2.right);
  }
  if (!s) return false;
  if (s.val !== t.val) {
    return isSubtree(s.left, t) || isSubtree(s.right, t);
  }
  return isSameTree(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
};
// @lc code=end
