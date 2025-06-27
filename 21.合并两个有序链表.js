// @algorithm @lc id=21 lang=javascript
// @title merge-two-sorted-lists
import * as a from 'algm';
import { ListNode } from 'algm';
// @test([2], [1])=[1,2]
// @test([1,2,4],[1,3,4])=[1,1,2,3,4,4]
// @test([],[])=[]
// @test([],[0])=[0]
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function mergeTwoLists(l1, l2) {
  let dummy = new ListNode();
  let head = dummy;
  while (l1 || l2) {
    let v1 = l1 ? l1.val : Infinity;
    let v2 = l2 ? l2.val : Infinity;
    if (v1 <= v2) {
      dummy.next = new ListNode(v1);
      l1 = l1.next;
    } else {
      dummy.next = new ListNode(v2);
      l2 = l2.next;
    }
    dummy = dummy.next;
  }
  return head.next;
}
