// @algorithm @lc id=100163 lang=javascript
// @title remove-duplicate-node-lcci
import * as a from 'algm';
import { ListNode } from 'algm';
// @test([1,2,3,3,2,1])=[1,2,3]
// @test([1,1,1,1,2])=[1,2]
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
var removeDuplicateNodes = function (head) {
  // const set = new Set();
  // const copy = head
  // let prev = head;
  // while (head) {
  //   if (set.has(head.val)) {
  //     prev.next = head.next; // Remove the duplicate node
  //     head = head.next; // Skip the duplicate node
  //   } else {
  //     set.add(head.val);
  //     prev = head;
  //     head = head.next;
  //   }
  // }
  // return copy

  // 进阶O1
  let current = head;
  while (current) {
    // 使用runner指针检查当前节点后面的所有节点
    let runner = current;
    while (runner.next) {
      if (runner.next.val === current.val) {
        // 发现重复节点，直接跳过
        runner.next = runner.next.next;
      } else {
        // 没有重复，继续向后检查
        runner = runner.next;
      }
    }
    // 移动到下一个节点
    current = current.next;
  }
  return head;
};
