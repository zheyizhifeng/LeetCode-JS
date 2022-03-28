/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// const {
//   ListNode,
//   transferListToArray,
//   getLinkedListFromArray,
// } = require('./linked-list-utils');
var rotateRight = function (head, k) {
  if (!head || !head.next) return head;
  function getLenghtOfList(head) {
    let count = 0;
    while (head) {
      count++;
      head = head.next;
    }
    return count;
  }
  const length = getLenghtOfList(head);
  const modK = k % length;
  if (modK === 0) return head;
  let tail = head;
  let newHead = head;
  while (tail.next) {
    tail = tail.next;
  }
  tail.next = head; // 闭环

  for (let i = 1; i < length - modK; i++) {
    head = head.next;
  }
  newHead = head.next;
  head.next = null;
  return newHead;
};
// const head = getLinkedListFromArray([1,2,3,4,5]);
// rotateRight(head, 2);
// @lc code=end
