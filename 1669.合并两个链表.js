// @algorithm @lc id=1765 lang=javascript
// @title merge-in-between-linked-lists
import * as a from 'algm';
import { ListNode } from 'algm';
// @test([10,1,13,6,9,5], 3, 4, [1000000,1000001,1000002])=[10,1,13,1000000,1000001,1000002,5]
// @test([10,1,13,6,9,5], 3, 4, [1000000,1000001,1000002])=[10,1,13,1000000,1000001,1000002,5]
// @test([10,1,13,6,9,5], 3, 4, [1000000,1000001,1000002])=[10,1,13,1000000,1000001,1000002,5]
// @test([10,1,13,6,9,5],3,4,[1000000,1000001,1000002])=[10,1,13,1000000,1000001,1000002,5]
// @test([0,1,2,3,4,5,6],2,5,[1000000,1000001,1000002,1000003,1000004])=[0,1,1000000,1000001,1000002,1000003,1000004,6]
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  let cur = list2;
  while (cur && cur.next) {
    cur = cur.next;
  }
  let pos = 1;
  let pa = list1; // 指向a前一个节点
  while (pos < a) {
    pa = pa.next;
    pos++;
  }
  let diff = b - a + 2;
  let pb = pa; // 指向b后一个节点
  while (diff > 0 && pb) {
    pb = pb.next;
    diff--;
  }
  if (pa) {
    pa.next = list2;
  }
  if (cur) {
    cur.next = pb;
  }
  return list1;
};
