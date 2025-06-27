// @algorithm @lc id=23 lang=javascript
// @title merge-k-sorted-lists
import * as a from 'algm';
import { ListNode } from 'algm';
// @test([[1,4,5],[1,3,4],[2,6]])=[1,1,2,3,4,4,5,6]
// @test([])=[]
// @test([[]])=[]
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length < 1) return null;
  if (lists.length === 1) return lists[0];
  // 两个链表以上
  const mergeTwoLists = (list1, list2) => {
    let dummy = new ListNode();
    const copy = dummy;
    while (list1 || list2) {
      let v1 = null;
      let v2 = null;

      if (list1) {
        v1 = list1.val;
      }
      if (list2) {
        v2 = list2.val;
      }

      if (v2 === null || (v1 !== null && v1 <= v2)) {
        dummy.next = list1;
        dummy = dummy.next;
        list1 = list1.next;
      }
      else if (v1 === null || v2 < v1) {
        dummy.next = list2;
        dummy = dummy.next;
        list2 = list2.next;
      }
    }
    return copy.next;
  };
  let combined = null;
  for(let list of lists) {
    combined = mergeTwoLists(combined, list);
  }
  return combined
};
