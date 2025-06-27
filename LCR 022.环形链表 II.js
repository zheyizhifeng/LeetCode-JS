// @algorithm @lc id=1000258 lang=javascript 
// @title c32eOV
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
    let slow = head, fast = head;
    let h = head;
    while(fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
      if (slow === fast) {
        // 相遇了
        break;
      }
    }
    if (!fast || !fast.next) {
      // 没有环
      return null;
    }
    // 有环
    while (h !== slow) {
      h = h.next;
      slow = slow.next;
    }
    return h; // 返回环的入口
};