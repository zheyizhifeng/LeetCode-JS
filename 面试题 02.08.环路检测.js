// @algorithm @lc id=100168 lang=javascript 
// @title linked-list-cycle-lcci
import * as a from 'algm'
import { ListNode } from 'algm'
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    const set = new Set()
    while (head) {
      if (set.has(head)) return head
      set.add(head)
      head = head.next
    }
    return null
};