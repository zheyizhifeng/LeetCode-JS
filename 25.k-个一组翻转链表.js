/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
// const {
//   ListNode,
//   transferListToArray,
//   getLinkedListFromArray,
// } = require('./linked-list-utils');
function reverse(start, end) {
  // 翻转[start, end)之间的链表
  let newHead = null;
  while (start !== end) {
    const next = start.next;
    start.next = newHead;
    newHead = start;
    start = next;
  }
  return newHead; // 返回新的头节点
}
function getLength(head) {
  let count = 0;
  while (head) {
    count++;
    head = head.next;
  }
  return count;
}
var reverseKGroup = function (head, k) {
  if (k === 1 || !head) return head;
  let left = head;
  let right = head;
  for (let i = 0; i < k; i++) {
    if (!right) return head; // 如果剩余节点不足k个，直接返回
    right = right.next; // 找到当前组的右端
  }
  const newHead = reverse(left, right); // 翻转当前组
  left.next = reverseKGroup(right, k); // 递归处理剩余部分
  return newHead; // 返回新的头节点
};
// const head = getLinkedListFromArray([1, 2, 3, 4, 5]);
// reverseKGroup(head, 2);
// @lc code=end
