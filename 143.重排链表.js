/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
 */

// @lc code=start
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
var reorderList = function (head) {
  if (!head || !head.next) return head;
  // console.log('head >>> ', head);
  let right = getMiddleOfList(head);
  // console.log('right >>> ', right);
  let reversedRight = reverse(right);
  // console.log('reversedRight >>> ', reversedRight);
  mergeTwoListInTurn(head, reversedRight);
  // console.log('head >>> ', head);
};

// 取链表中【右】点，偶数长度指向一半，奇数长度指向中点
function getMiddleOfList(head) {
  let slow = head;
  let fast = head;
  let prev = null; // slow 之前的节点
  while (fast && fast.next) {
    prev = slow;
    fast = fast.next.next;
    slow = slow.next;
  }
  prev.next = null; // head 分成 2段
  return slow;
}
// 反转链表
function reverse(head) {
  let reversedList = null;
  let cur = head;
  while (cur) {
    const next = cur.next;
    cur.next = reversedList;
    reversedList = cur;
    cur = next;
  }
  return reversedList;
}
// 交替合并两个链表
// 结果: l1-l1(mid+1)-l2-l2(mid+2)-l3-l3(mid+3) 【链表为奇数长度时，还有一个 l1(mid)】
function mergeTwoListInTurn(l1, l2) {
  // l2.length >= l1.length;
  let prev = null; // 保存l2最后一个节点
  while (l1 && l2) {
    prev = l2;
    const nextL1 = l1.next;
    const nextL2 = l2.next;
    l1.next = l2;
    l2.next = nextL1;
    l1 = nextL1;
    l2 = nextL2;
  }
  prev.next = l2 || null;
}
// @lc code=end
