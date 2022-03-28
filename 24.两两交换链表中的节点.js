/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
//   ListNode,
//   transferListToArray,
//   getLinkedListFromArray,
// } = require('./linked-list-utils');
var swapPairs = function (head) {
  /**
   * 递归
   */
  /* if (!head || !head.next) return head;
  let n1 = head;
  let n2 = n1.next;
  let n3 = n2.next;
  n2.next = n1
  n1.next = swapPairs(n3)
  return n2 */

  let dummy = new ListNode('head');
  dummy.next = head;
  const dummyCopy = dummy;

  while (dummy.next && dummy.next.next) {
    let n1 = dummy.next;
    let n2 = dummy.next.next;

    dummy.next = n2;
    n1.next = n2.next;
    n2.next = n1;

    dummy = n1;
  }
  // console.log('dummyCopy.next => ', transferListToArray(dummyCopy.next));
  return dummyCopy.next;
};
// const head = getLinkedListFromArray([1, 2, 3, 4, 5, 6]);
// swapPairs(head);
// @lc code=end
