// @algorithm @lc id=1000007 lang=javascript
// @title kth-node-from-end-of-list-lcci
import * as a from 'algm';
import { ListNode } from 'algm';
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function (head, k) {
  // 先算长度
  let len = 0;
  let current = head;
  while (current) {
    len++;
    current = current.next;
  }
  // 再算正向的索引位置, 从 0 开始: len - k
  let index = 0;
  while (head) {
    if (index === len - k) {
      return head.val;
    }
    index++;
    head = head.next;
  }
};
