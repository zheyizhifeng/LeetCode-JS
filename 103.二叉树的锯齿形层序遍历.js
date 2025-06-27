/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  const res = [];
  const queue = [root];
  let level = 0;
  while (queue.length > 0) {
    const levelList = [];
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      levelList.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    if (level % 2 === 1) {
      levelList.reverse();
    }
    res.push(levelList);
    level++;
  }
  return res;
};
// @lc code=end
