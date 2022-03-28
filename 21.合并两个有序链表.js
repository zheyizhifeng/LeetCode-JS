/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let head = new ListNode('head');
  const copyHead = head;
  while (l1 && l2) {
    const v1 = l1.val;
    const v2 = l2.val;
    if (v1 < v2) {
      l1 = l1.next;
    } else {
      l2 = l2.next;
    }
    head.next = new ListNode(Math.min(v1, v2));
    head = head.next;
  }
  head.next = l1 || l2;
  return copyHead.next;
};
// @lc code=end
