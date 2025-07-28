/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 * 先按先序转为数组
 * 再进行生成链表
 */
var flatten = function (root) {
  // 定义：将以 root 为根的树拉平为链表
  var flattenTree = function (root) {
    // base case
    if (root == null) return;
    // 先递归拉平左右子树
    flattenTree(root.left);
    flattenTree(root.right);

    // ***后序遍历位置***
    // 1、左右子树已经被拉平成一条链表
    let left = root.left;
    let right = root.right;

    // 2、将左子树作为右子树
    root.left = null;
    root.right = left;

    // 3、将原先的右子树接到当前右子树的末端
    let p = root;
    while (p.right != null) {
      p = p.right;
    }
    p.right = right;
  };

  flattenTree(root);
};
// @lc code=end
