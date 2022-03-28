/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
 * @return {number}
 */
// const { TreeNode, getTreeFromArray } = require('./binary-tree-utils');
var getMinimumDifference = function (root) {
  if (!root || (!root.left && !root.right)) return Infinity;
  if (root.left && root.right) {
    // 寻找右子树的最小值[最左叶子节点]和左子树的最大值[最右的叶子节点]，它们是距离root最接近的值
    let leftTree = root.left;
    let rightTree = root.right;
    while (leftTree.right) {
      leftTree = leftTree.right;
    }
    while (rightTree.left) {
      rightTree = rightTree.left;
    }
    return Math.min(
      getMinimumDifference(root.left),
      getMinimumDifference(root.right),
      root.val - leftTree.val,
      rightTree.val - root.val
    );
  } else if (root.left) {
    // 只有左子树
    let leftTree = root.left;
    while (leftTree.right) {
      leftTree = leftTree.right;
    }
    return Math.min(getMinimumDifference(root.left), root.val - leftTree.val);
  } else {
    // 只有右子树
    let rightTree = root.right;
    while (rightTree.left) {
      rightTree = rightTree.left;
    }
    return Math.min(getMinimumDifference(root.right), rightTree.val - root.val);
  }
};
// const root = getTreeFromArray([1, null, 3, 2])
// console.log(getMinimumDifference(root));
// @lc code=end
