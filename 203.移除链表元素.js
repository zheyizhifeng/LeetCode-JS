/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let headList = new ListNode('head');
  headList.next = head;
  const headListCopy = headList;
  while (headList.next) {
    if (headList.next.val === val) {
      headList.next = headList.next.next;
    } else {
      headList = headList.next;
    }
  }
  return headListCopy.next;
};
// @lc code=end
