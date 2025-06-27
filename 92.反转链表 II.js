// @algorithm @lc id=92 lang=javascript
// @title reverse-linked-list-ii
import * as a from 'algm';
import { ListNode } from 'algm';
// @test([1,2,3,4,5], 2, 4)=[1,4,3,2,5]
// @test([1,2,3,4,5],2,4)=[1,4,3,2,5]
// @test([5],1,1)=[5]
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (left === right) return head; // 如果没有反转的必要，直接返回原链表
  let dummy = new ListNode(0, head); // 创建一个虚拟头节点
  let prev = dummy; // prev指向虚拟头节点
  // 找到left位置的前一个节点
  for (let i = 1; i < left; i++) {
    prev = prev.next;
  }
  // prev 记录的是 left位置的前一个节点
  let current = prev.next; // current指向left位置的节点
  let reversed = null; // 用于存储反转后的链表部分

  // 反转从left到right的部分
  for (let i = left; i <= right; i++) {
    let next = current.next; // 保存当前节点的下一个节点
    current.next = reversed; // 将当前节点的next指向已反转的部分
    reversed = current; // 更新已反转部分的头节点
    current = next; // 移动到下一个节点
  }
  prev.next = reversed; // 将left位置的前一个节点的next指向反转后的部分

  // current现在指向right位置的下一个节点
  // 将反转部分的尾节点连接到current
  let tail = prev; // tail指向反转部分的尾节点
  for (let i = left; i <= right; i++) {
    tail = tail.next; // 移动到反转部分的尾节点
  }
  tail.next = current; // 将反转部分的尾节点的next指向right位置的下一个节点
  // 返回新的头节点
  // dummy.next是新的头节点

  return dummy.next; // 返回虚拟头节点的下一个节点，即新的头节点
};