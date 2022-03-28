/*
 * @lc app=leetcode.cn id=563 lang=javascript
 *
 * [563] 二叉树的坡度
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
 * @return {number}
 */
var findTilt = function (root) {
  let slope = 0;
  function sumOfTree(root) {
    if (!root) return 0;
    const leftSum = sumOfTree(root.left);
    const rightSum = sumOfTree(root.right);
    slope += Math.abs(leftSum - rightSum);
    return root.val + leftSum + rightSum;
  }
  sumOfTree(root);
  return slope;
};
// @lc code=end
