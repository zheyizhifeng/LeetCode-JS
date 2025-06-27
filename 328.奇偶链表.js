// @algorithm @lc id=328 lang=javascript
// @title odd-even-linked-list
import * as a from 'algm';
import { ListNode } from 'algm';
// @test([1,2,3,4,5])=[1,3,5,2,4]
// @test([2,1,3,5,6,4,7])=[2,3,6,7,1,5,4]
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
var oddEvenList = function (head) {
  if (!head || !head.next) return head;
  // odd 指向最后一个奇数节点
  let odd = head;
  // even 指向第一个偶数节点
  let even = head.next;
  let evenHead = even; // 保存偶数链表的头节点
  while (odd && odd.next && odd.next.next) {
    odd.next = odd.next.next; // 跳过偶数节点
    odd = odd.next; // 移动到下一个奇数节点

    even.next = even.next.next; // 跳过奇数节点
    even = even.next; // 移动到下一个偶数节点
  }

  odd.next = evenHead; // 将奇数链表的尾部连接到偶数链表的头部
  return head;
};
