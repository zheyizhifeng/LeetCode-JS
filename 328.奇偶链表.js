/*
 * @lc app=leetcode.cn id=328 lang=javascript
 *
 * [328] 奇偶链表
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
 * @return {ListNode}
 */
// const {
//   transferListToArray,
//   getLinkedListFromArray,
// } = require('./linked-list-utils');
var oddEvenList = function (head) {
  if (!head) return head;
  let odd = head;
  let even = head.next; // even不变, 只动odd
  while (odd.next && odd.next.next) {
    const tmp = odd.next;
    odd.next = odd.next.next;
    odd = odd.next;
    tmp.next = odd.next;
  }
  odd.next = even;
  return head;
};
// const head = getLinkedListFromArray([1, 2, 3, 4, 5, 6, 7, 8]);
// oddEvenList(head);
// @lc code=end
