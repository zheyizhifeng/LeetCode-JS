// @algorithm @lc id=100167 lang=javascript
// @title intersection-of-two-linked-lists-lcci
import * as a from 'algm';
import { ListNode } from 'algm';
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let copyB = headB;
  while (headA) {
    while (headB) {
      if (headA === headB) return headA;
      headB = headB.next;
    }
    headA = headA.next;
    headB = copyB;
  }
  return null;
};
