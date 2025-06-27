// @algorithm @lc id=206 lang=javascript 
// @title reverse-linked-list
import * as a from 'algm'
import { ListNode } from 'algm'
// @test([1,2,3,4,5])=[5,4,3,2,1]
// @test([1,2])=[2,1]
// @test([])=[]
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
  let reversedList = null;
  let current = head;
  while(current) {
    const nextNode = current.next; // 保存下一个节点
    current.next = reversedList; // 将当前节点的next指向已反转的链表
    reversedList = current; // 更新已反转链表的头节点
    current = nextNode; // 移动到下一个节点
  }
  return reversedList
};