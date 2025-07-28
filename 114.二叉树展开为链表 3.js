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
var flatten = function(root) {
  let curr = root;
  while (curr) {
    if (curr.left) {
      // 找左子树的最右节点
      let prev = curr.left;
      while (prev.right) prev = prev.right;
      // 最右节点的右指向原右子树
      prev.right = curr.right;
      // 当前节点的右指向左子树，左置空
      curr.right = curr.left;
      curr.left = null;
    }
    // 处理下一个节点（原左子树的最左节点）
    curr = curr.right;
  }
};
// @lc code=end
