/*
 * @lc app=leetcode.cn id=101 lang=javascript
 * @lcpr version=30201
 *
 * [101] 对称二叉树
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  /**
   * 递归方案
   */
  if (!root) return true;
  return isSymmetricMirror(root.left, root.right)
};

/**
 * 比价两棵树是否对称
 */
function isSymmetricMirror(left, right) {
  if (!left && !right) return true;
  if (!(left && right)) return false;
  if (left.val !== right.val) return false;
  return isSymmetricMirror(left.left, right.right) && isSymmetricMirror(left.right, right.left);
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,2,3,4,4,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,2,null,3,null,3]\n
// @lcpr case=end

 */
