// @algorithm @lc id=148 lang=javascript 
// @title sort-list
import * as a from 'algm'
import { ListNode } from 'algm'
// @test([4,2,1,3])=[1,2,3,4]
// @test([-1,5,3,4,0])=[-1,0,3,4,5]
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
var sortList = function(head) {
  if (!head || !head.next) return head;
  let mid = getMidOfNode(head);
  // head:前半段，mid: 后半段
  // 分治：
  let l1 = sortList(head);
  let l2 = sortList(mid);
  return merge(l1, l2);
};

// 合并两个有序链表
function merge(l1, l2) {
  let dummy = new ListNode();
  let head = dummy;
  while(l1 || l2) {
    let v1 = l1 ? l1.val : Infinity;
    let v2 = l2 ? l2.val : Infinity;
    if (v1 <= v2) {
      dummy.next = new ListNode(v1);
      l1 = l1.next;
    } else {
      dummy.next = new ListNode(v2);
      l2 = l2.next;
    }
    dummy = dummy.next;
  }
  return head.next;
}

// 找到链表中点
function getMidOfNode(head) {
  let slowPrev = head;
  let slow = head;
  let fast = head;
  while(fast && fast.next) {
    fast = fast.next.next;
    slowPrev = slow;
    slow = slow.next;
  }
  // 断开整个链表，分为两段
  slowPrev.next = null;
  return slow;
}