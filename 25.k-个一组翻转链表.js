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
function reverse(head) {
  let list = null;
  while (head) {
    const tmp = head;
    head = head.next;
    tmp.next = list;
    list = tmp;
  }
  return list;
}
function getNodes(head) {
  let count = 0;
  while (head) {
    count++;
    head = head.next;
  }
  return count;
}
var reverseKGroup = function (head, k) {
  const nodes = getNodes(head);
  if (!head || !head.next || k === 1 || nodes < k) return head;
  // K >= 2
  let dummy = new ListNode('head', head);
  let dummyCopy = dummy;
  let start = head;
  let end = head;
  let count = 0;
  while (start) {
    count++;
    if (count > nodes) break;
    if (count % k === 0) {
      // 到达end
      const tmp = end.next;
      end.next = null;
      dummy.next = reverse(start);
      dummy = start;
      start.next = tmp;
      start = tmp;
      end = tmp;
    } else {
      end = end.next;
    }
  }
  return dummyCopy.next;
};
// const head = getLinkedListFromArray([1, 2, 3, 4, 5]);
// reverseKGroup(head, 2);
// @lc code=end
