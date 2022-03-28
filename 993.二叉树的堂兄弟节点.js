/*
 * @lc app=leetcode.cn id=993 lang=javascript
 *
 * [993] 二叉树的堂兄弟节点
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  if (!root || x === y) return false;
  function depthOfNode(root, val) {
    if (!root) return Infinity;
    if (root.val === val) {
      return 0;
    }
    const leftResult = depthOfNode(root.left, val) + 1;
    const rightResult = depthOfNode(root.right, val) + 1;
    return leftResult !== Infinity ? leftResult : rightResult;
  }
  if (depthOfNode(root, x) !== depthOfNode(root, y)) return false;

  function hasCommonParent(root, a, b) {
    if (!root || (!root.left && !root.right)) return false;
    if (!root.left) {
      return hasCommonParent(root.right, a, b);
    }
    if (!root.right) {
      return hasCommonParent(root.left, a, b);
    }
    if (root.left && root.right) {
      return (
        (root.left.val === a && root.right.val === b) ||
        (root.left.val === b && root.right.val === a) ||
        hasCommonParent(root.left, a, b) ||
        hasCommonParent(root.right, a, b)
      );
    }
  }
  if (hasCommonParent(root, x, y)) return false;
  return true;
};
// @lc code=end
