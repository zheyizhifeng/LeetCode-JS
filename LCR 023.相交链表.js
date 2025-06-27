// @algorithm @lc id=1000259 lang=javascript
// @title 3u1WK4
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
  if (!headA || !headB) return null;
  function getLength(head) {
    let len = 0;
    while (head) {
      len++;
      head = head.next;
    }
    return len;
  }
  const lenA = getLength(headA);
  const lenB = getLength(headB);
  let diff = Math.abs(lenA - lenB);
  let longer = lenA > lenB ? headA : headB;
  let shorter = lenA > lenB ? headB : headA;
  if (diff > 0) {
    while (diff > 0) {
      longer = longer.next;
      diff--;
    }
  }
  while (longer && shorter) {
    if (longer === shorter) {
      return longer;
    }
    longer = longer.next;
    shorter = shorter.next;
  }
  return null;
};
