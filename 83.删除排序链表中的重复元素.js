/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  const headCopy = head;
  while (head) {
    if (head.next && head.val === head.next.val) {
      head.next = head.next.next;
    } else {
      head = head.next;
    }
  }
  return headCopy;
};
// @lc code=end
