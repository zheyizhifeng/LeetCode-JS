// @algorithm @lc id=82 lang=javascript
// @title remove-duplicates-from-sorted-list-ii
import * as a from 'algm';
import { ListNode } from 'algm';
// @test([1,2,3,3,4,4,5])=[1,2,5]
// @test([1,1,1,2,3])=[2,3]
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
var deleteDuplicates = function (head) {
  let cur = head;
  let dummy = new ListNode(0, head); // 创建一个虚拟头节点
  let prev = dummy; // prev指向当前节点的前一个节点，初始为虚拟头节点
  while (cur && cur.next) {
    // 注意： 相同节点可能会有多个
    if (cur.val === cur.next.val) {
      // 持续删除相同节点，只留下cur【第一个也是唯一一个重复的节点】
      while (cur && cur.next && cur.val === cur.next.val) {
        cur.next = cur.next.next;
      }
      // 删除cur节点
      prev.next = cur.next; // 删除cur节点
      cur = prev.next; // cur移动到下一个节点
    } else {
      prev = cur; // 保存上一个节点
      cur = cur.next; // 移动到下一个节点
    }
  }
  return dummy.next; // 返回虚拟头节点的下一个节点
};
