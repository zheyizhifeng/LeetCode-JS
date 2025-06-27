// @algorithm @lc id=100188 lang=javascript
// @title sum-lists-lcci
import * as a from 'algm';
import { ListNode } from 'algm';
// @test([2,4,3], [5,6,4])=[7,0,8]
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
  let dummy = head = new ListNode(0)
  let carry = 0
  while (l1 || l2) {
    const v1 = l1 ? l1.val : 0;
    const v2 = l2 ? l2.val : 0;
    const bitSum = (v1 + v2 + carry);
    carry = bitSum >= 10 ? 1 : 0;
    const bit = bitSum % 10
    dummy.next = new ListNode(bit)
    dummy = dummy.next;
    l1 && (l1 = l1.next);
    l2 && (l2 = l2.next)
  }
  if (carry > 0) {
    dummy.next = new ListNode(1)
  }
  return head.next
};