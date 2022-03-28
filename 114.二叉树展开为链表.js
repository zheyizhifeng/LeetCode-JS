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
  if (!root) return;
  const stack = [root];
  let last = null;
  while (stack.length > 0) {
    const node = stack.pop();
    if (last) {
      last.left = null;
      last.right = node;
    }
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
    last = node;
  }
};
// @lc code=end
