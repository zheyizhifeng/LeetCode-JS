// @algorithm @lc id=1000342 lang=javascript 
// @title vvXgSW
import * as a from 'algm'
import { ListNode } from 'algm'
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
var mergeKLists = function(lists) {
  function mergeTwoLink(l1, l2) {
    let dummy = new ListNode(0);
    let head = dummy;
    while(l1 || l2) {
      let v1 = null;
      let v2 = null;
      if (l1) {
        v1 = l1.val;
      }
      if (l2) {
        v2 = l2.val;
      }
      if (v1 === null) {
        dummy.next = l2;
        break;
      } else if (v2 === null) {
        dummy.next = l1;
        break;
      } else if (v1 < v2) {
        dummy.next = l1;
        l1 = l1.next;
      } else {
        dummy.next = l2;
        l2 = l2.next;
      }
      dummy = dummy.next;
    }
    return head.next;
  }
  let result = null;
  for(let l of lists) {
    result = mergeTwoLink(result, l);
  }
  return result;
};