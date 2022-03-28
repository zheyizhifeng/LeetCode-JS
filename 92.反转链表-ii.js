/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
// const {
//   ListNode,
//   transferListToArray,
//   getLinkedListFromArray,
//   getLinkedListLength,
// } = require('./linked-list-utils');
var reverseBetween = function (head, m, n) {
  if (m === n) return head;
  const headList = new ListNode('head');
  headList.next = head;
  let headCopy = headList;
  let mHead = null;
  let nHead = null;
  let left = null;
  for (let i = 1; i <= n; i++) {
    if (i === m) {
      left = headCopy;
      mHead = headCopy.next;
    }
    if (i === n) {
      nHead = headCopy.next;
    }
    headCopy = headCopy.next;
  }

  const right = nHead.next;

  let reverseList = null;
  while (m <= n) {
    const tmp = mHead;
    mHead = mHead.next;
    tmp.next = reverseList;
    reverseList = tmp;
    m++;
  }
  // console.log('mHead => ', transferListToArray(mHead));

  // console.log('reverseList => ', transferListToArray(reverseList));
  left.next = reverseList;

  // console.log('nHead => ', transferListToArray(nHead));

  while (reverseList && reverseList.next) {
    reverseList = reverseList.next;
  }
  reverseList.next = right;

  // console.log('headList => ', transferListToArray(headList.next));
  return headList.next;
};
// const head = getLinkedListFromArray([1, 2, 3, 4, 5]);
// reverseBetween(head, 4, 5);
// @lc code=end
