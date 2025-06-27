// @algorithm @lc id=1000260 lang=javascript 
// @title UHnkqh
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
 * @return {ListNode}
 */
var reverseList = function(head) {
  let prev = null;
  let current = head;
  while (current) {
    const nextNode = current.next; // 保存下一个节点
    current.next = prev; // 反转当前节点的指针
    prev = current; // 移动 prev 到当前节点
    current = nextNode; // 移动到下一个节点
  }
  return prev; // prev 将是新的头节点
};