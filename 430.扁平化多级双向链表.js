/*
 * @lc app=leetcode.cn id=430 lang=javascript
 *
 * [430] 扁平化多级双向链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
// const {
//   Node,
//   getLinkedListFromArray,
//   transferListToArray,
// } = require('./linked-list-utils');
var flatten = function (head) {
  if (!head) return head;
  const headCopy = head;
  while (head) {
    const next = head.next;
    if (head.child) {
      // 开始递归
      let afterFlat = flatten(head.child);
      head.next = afterFlat;
      afterFlat.prev = head;
      while (afterFlat.next) {
        afterFlat = afterFlat.next;
      }
      afterFlat.next = next;
      if (next) {
        next.prev = afterFlat;
      }
      head.child = null;
    }
    head = next;
  }
  return headCopy;
};
// [1, 2, 3, 4, 5, 6, null, null, null, 7, 8, 9, 10, null];
// const head = new Node(1, null, new Node(2, null, null, null), new Node(3, null, null, null))
// head.next.prev = head
// flatten(head)
// @lc code=end
