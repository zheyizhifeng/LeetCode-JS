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
// const linkedListUtils = require('./linked-list-utils');
// const { ListNode, transferListToArray, getLinkedListFromArray } = require('./linked-list-utils')
var reorderList = function (head) {
  if (!head) return head;
  function reverseList(head) {
    let list = null;
    while (head) {
      const tmp = head;
      head = head.next;
      tmp.next = list;
      list = tmp;
    }
    return list;
  }
  function combineTwoLink(l1, l2) {
    // console.log('l1 => ', transferListToArray(l1));
    // console.log('l2 => ', transferListToArray(l2));
    // l1.length === l2 || l1.length === l2.length - 1
    let l1Copy = l1;
    while (l1 && l2) {
      const tmp1 = l1.next;
      const tmp2 = l2.next;

      l1.next = l2;
      l1 = tmp1;

      l2.next = l1 || tmp2;
      l2 = tmp2;
    }
    // console.log('l1Copy => ', transferListToArray(l1Copy));
    return l1Copy;
  }
  let slow = head;
  let fast = head;
  let slowCopy = slow;
  while (fast && fast.next) {
    slowCopy = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  slowCopy.next = null;
  const reversed = reverseList(slow);
  // console.log('head => ', transferListToArray(head));
  // console.log('reversed => ', transferListToArray(reversed));

  return combineTwoLink(head, reversed);
};

// const head = getLinkedListFromArray([1, 2, 3, 4, 5])
// reorderList(head)
// console.log('after changed, head => ', transferListToArray(head));
// @lc code=end
