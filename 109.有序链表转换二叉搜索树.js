/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
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
 * @return {TreeNode}
 */
// const {
//   ListNode,
//   getLinkedListFromArray,
//   transferListToArray,
// } = require('./linked-list-utils');
// const { TreeNode } = require('./binary-tree-utils');
var sortedListToBST = function (head) {
  if (!head) return head;
  if (!head.next) return new TreeNode(head.val);
  let fast = head;
  let slow = head;
  let prev = null;
  const headCopy = head;
  // const f = transferListToArray;
  while (fast && fast.next) {
    fast = fast.next.next;
    prev = slow;
    slow = slow.next;
  }
  const root = new TreeNode(slow.val);
  if (prev) prev.next = null;
  root.left = sortedListToBST(headCopy);
  root.right = sortedListToBST(slow.next);
  // console.log(root);
  return root;
};

// const head = getLinkedListFromArray([-10, -3, 0, 5, 9]);
// sortedListToBST(head);
// @lc code=end
