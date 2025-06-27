// @algorithm @lc id=142 lang=javascript 
// @title linked-list-cycle-ii
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
   const seen = new Set();
   let current = head;
    while (current) {
        if (seen.has(current)) {
            return current; // Cycle detected, return the node where the cycle begins
        }
        seen.add(current);
        current = current.next;
    }  
    return null; // No cycle detected, return null
};