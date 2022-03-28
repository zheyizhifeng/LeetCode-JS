/*
 * @lc app=leetcode.cn id=1290 lang=javascript
 *
 * [1290] 二进制链表转整数
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
 * @return {number}
 */
var getDecimalValue = function (head) {
  if (!head) return;
  let sum = 0;
  while (head) {
    sum = (sum << 1) + head.val;
    head = head.next;
  }
  return sum;
};
// @lc code=end
