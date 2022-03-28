/*
 * @lc app=leetcode.cn id=725 lang=javascript
 *
 * [725] 分隔链表
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
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */

// const {
//   ListNode,
//   transferListToArray,
//   getLinkedListFromArray,
// } = require('./linked-list-utils');
var splitListToParts = function (root, k) {
  function getLength(head) {
    let count = 0;
    while (head) {
      count++;
      head = head.next;
    }
    return count;
  }
  const length = getLength(root);
  const result = [];
  if (length <= k) {
    for (let i = 0; i < k; i++) {
      if (!root) {
        result.push(null);
      } else {
        const tmp = root.next;
        root.next = null;
        result.push(root);
        root = tmp;
      }
    }
  } else {
    let basePartLength = parseInt(length / k);
    const modK = length % k;
    for (let i = 1; i <= k; i++) {
      let group = root;
      const groupCopy = group;
      for (let j = 1; j < basePartLength; j++) {
        group = group.next;
      }
      if (i <= modK) {
        group = group.next;
      }
      const tmp = group.next;
      group.next = null;
      result.push(groupCopy);
      root = tmp;
    }
  }
  return result;
};
// const root = getLinkedListFromArray([1, 2, 3, 4, 5, 6, 7]);
// splitListToParts(root, 3)
// @lc code=end
