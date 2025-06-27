// @algorithm @lc id=25 lang=javascript 
// @title reverse-nodes-in-k-group
import * as a from 'algm'
import { ListNode } from 'algm'
// @test([1,2,3,4,5],2)=[2,1,4,3,5]
// @test([1,2,3,4,5],3)=[3,2,1,4,5]
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
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (k===1) return head;
  function getLength(node) {
    let length = 0;
    while (node) {
      length++;
      node = node.next;
    }
    return length;
  }
  function reverse(start, end) {
    let prev = null;
    let curr = start;
    while (curr !== end) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev; // 返回新的头节点
  }
  let length = getLength(head);
  const dummy = new ListNode(0, head);
  let prevGroupEnd = dummy;
  let current = head; 
  while (length >= k) {
    let left = current;
    let right = current;
    for (let i = 1; i <= k; i++) {
      right = right.next; // 找到当前组的右端
    }
    const newHead = reverse(left, right); // 翻转当前组
    prevGroupEnd.next = newHead; // 将前一组的尾部连接到新头
    left.next = right; // 将当前组的尾部连接到下一组的头
    prevGroupEnd = left; // 更新前一组的尾部
    current = right; // 移动到下一组的头
    // 注意：这里的 length 需要在每次翻转后减少 k
    // 以确保我们只处理完整的 k 个节点
    length -= k; // 减少剩余长度
  }
  return dummy.next; // 返回新的头节点
};