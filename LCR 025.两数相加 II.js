// @algorithm @lc id=1000261 lang=javascript
// @title lMSNwu
import * as a from 'algm';
import { ListNode } from 'algm';
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  l1 = reverse(l1);
  l2 = reverse(l2);
  const l = sum(l1, l2);
  return reverse(l);
};
function reverse(l) {
  let result = null;
  let cur = l;
  while (cur) {
    const next = cur.next;
    cur.next = result;
    result = cur;
    cur = next;
  }
  return result;
}
function sum(l1, l2) {
  let carry = 0;
  let dummy = new ListNode();
  let l = dummy;
  while (l1 || l2 || carry) {
    let v1 = l1 ? l1.val : 0;
    let v2 = l2 ? l2.val : 0;
    let bit = v1 + v2 + carry;
    if (bit >= 10) {
      carry = 1;
    } else {
      carry = 0;
    }
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
    dummy.next = new ListNode(bit % 10);
    dummy = dummy.next;
  }
  return l.next;
}
