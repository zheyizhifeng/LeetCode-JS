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
 */
var flatten = function (root) {
  const list = [];
  function traverse(root) {
    if (!root) return
    list.push(root);
    traverse(root.left);
    traverse(root.right);
  }
  traverse(root);
  let prev = null;
  let dummy = list;
  for(let node of list) {
    if (!prev) {
      prev = node;
    } else {
      prev.left = null;
      prev.right = node;
      prev = node;
    }
  }
  return dummy;
};
// @lc code=end
