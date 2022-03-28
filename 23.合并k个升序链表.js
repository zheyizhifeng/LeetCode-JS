/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  function merge2Lists(l1, l2) {
    let head = new ListNode('head');
    const headCopy = head;
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
    return headCopy.next;
  }
  function merge(lists, l, r) {
    if (l === r) return lists[l];
    if (l > r) return null;
    const mid = parseInt((l + r) / 2);
    return merge2Lists(merge(lists, l, mid), merge(lists, mid + 1, r));
  }
  return merge(lists, 0, lists.length - 1);
};
// @lc code=end
