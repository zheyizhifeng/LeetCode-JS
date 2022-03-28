/*
 * @lc app=leetcode.cn id=1379 lang=javascript
 *
 * [1379] 找出克隆二叉树中的相同节点
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
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {
  if (original === target) return cloned;
  function dfs(root, cloned) {
    if (!root) return null;
    if (root === target) {
      return cloned;
    } else {
      return dfs(root.left, cloned.left) || dfs(root.right, cloned.right);
    }
  }
  return dfs(original, cloned);
};
// @lc code=end
