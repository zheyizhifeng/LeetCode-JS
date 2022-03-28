/*
 * @lc app=leetcode.cn id=1669 lang=javascript
 *
 * [1669] 合并两个链表
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
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
// const {
//   ListNode,
//   transferListToArray,
//   getLinkedListFromArray,
// } = require('./linked-list-utils');
var mergeInBetween = function (list1, a, b, list2) {
  const dummy = new ListNode('head');
  dummy.next = list1;
  let head = dummy;
  let left = null;
  let right = null;
  let index = 0;
  while (head) {
    if (index === a) {
      left = head;
    }
    if (index === b) {
      right = head.next;
    }
    index++;
    head = head.next;
  }
  left.next = list2;
  while (list2.next) {
    list2 = list2.next;
  }
  list2.next = right.next;
  // console.log('dummy.next => ', transferListToArray(dummy.next));
  return dummy.next;
};
// const l1 = getLinkedListFromArray([0, 1, 2, 3, 4, 5,6]);
// const l2 = getLinkedListFromArray([
//   1000000,
//   1000001,
//   1000002,
//   1000003,
//   1000004,
// ]);
// mergeInBetween(l1, 2, 5, l2);
// @lc code=end
