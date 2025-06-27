// @algorithm @lc id=1000008 lang=javascript
// @title partition-list-lcci
import * as a from 'algm';
import { ListNode } from 'algm';
// @test([3,5,8,5,10,2,1],5)=[3,1,2,10,5,5,8]
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  const leftDummy = new ListNode(0);
  const rightDummy = new ListNode(0)
  let prev = leftDummy
  let tail = rightDummy
  let current = head;
  while (current) {
    const val = current.val;
    const node = new ListNode(val)
    if (val < x) {
      prev.next = node
      prev = prev.next
    } else {
      tail.next = node;
      tail = tail.next
    }
    current = current.next
  }
  prev.next = rightDummy.next
  return leftDummy.next
};
