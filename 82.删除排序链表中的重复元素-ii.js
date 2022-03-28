/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
// const {
//   ListNode,
//   transferListToArray,
//   getLinkedListFromArray,
// } = require('./linked-list-utils');
var deleteDuplicates = function (head) {
  if (!head || !head.next) return head;
  let noHead = head;
  const map = new Map();
  while (head) {
    if (map.has(head.val)) {
      map.set(head.val, map.get(head.val) + 1);
    } else {
      map.set(head.val, 1);
    }
    head = head.next;
  }
  const headList = new ListNode('head');
  headList.next = noHead;
  let headListCopy = headList;

  while (noHead) {
    if (map.get(noHead.val) > 1) {
      headListCopy.next = noHead.next;
    } else {
      headListCopy = headListCopy.next;
    }
    noHead = noHead.next;
  }
  return headList.next;
};
// const head = getLinkedListFromArray([1, 1, 1, 2, 3]);
// deleteDuplicates(head);
// @lc code=end
