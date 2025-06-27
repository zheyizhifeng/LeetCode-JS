// @algorithm @lc id=1000262 lang=javascript 
// @title LGjMqU
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  function getLastNode(head) {
    let last = head;
    while (last && last.next) {
      last = last.next;
    }
    return last;
  }
  let cur = head;
  let last = getLastNode(head);
  while(cur) {
    const next = cur.next;
    cur.next = last;
    cur = next;
  }
};