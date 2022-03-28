/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
// const {
//   ListNode,
//   transferListToArray,
//   getLinkedListFromArray,
// } = require('./linked-list-utils');
var partition = function (head, x) {
  let smallHead = new ListNode('small');
  let bigHead = new ListNode('big');
  let smallHeadCopy = smallHead;
  let bigHeadCopy = bigHead;
  while (head) {
    if (head.val < x) {
      smallHead.next = new ListNode(head.val);
      smallHead = smallHead.next;
    } else {
      bigHead.next = new ListNode(head.val);
      bigHead = bigHead.next;
    }
    head = head.next;
  }
  smallHead.next = bigHeadCopy.next;
  return smallHeadCopy.next;
};
// const head = getLinkedListFromArray([1, 4, 3, 2, 5, 2]);
// partition(head, 3);
// @lc code=end
