// @algorithm @lc id=1000257 lang=javascript 
// @title SLwz0R
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  // 先算长度
  let len = 0;
  let current = head;
  while (current) {
    len++;
    current = current.next;
  }
  
  // 再算正向的索引位置, 从 0 开始: len - n
  let index = 0;
  let prev = null;
  current = head;
  
  while (current) {
    if (index === len - n) {
      // 删除当前节点
      if (prev) {
        prev.next = current.next; // 跳过当前节点
      } else {
        head = current.next; // 删除头节点
      }
      break;
    }
    index++;
    prev = current;
    current = current.next;
  }
  
  return head;
};