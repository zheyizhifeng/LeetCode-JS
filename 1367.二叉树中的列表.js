/*
 * @lc app=leetcode.cn id=1367 lang=javascript
 *
 * [1367] 二叉树中的列表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
// const {
//   transferListToArray,
//   getTreeFromArray,
// } = require('./binary-tree-utils');
// const { getLinkedListFromArray } = require('./linked-list-utils');
var isSubPath = function (head, root) {
  if (!head) return true;
  let headString = '';
  while (head) {
    headString += head.val;
    head = head.next;
  }
  function hasSubPath(path = '', root) {
    if (path.indexOf(headString) >= 0) return true;
    if (!root) return false;
    const leftHasSubPath = hasSubPath(path + root.val, root.left);
    const rightHasSubPath = hasSubPath(path + root.val, root.right);
    return leftHasSubPath || rightHasSubPath;
  }
  return hasSubPath('', root);
};

// const head = getLinkedListFromArray([2, 8, 3]);
// const tree = getTreeFromArray([
//   1,
//   4,
//   4,
//   null,
//   2,
//   2,
//   null,
//   1,
//   null,
//   6,
//   8,
//   null,
//   null,
//   null,
//   null,
//   1,
//   3,
// ]);
// @lc code=end
