/*
 * @lc app=leetcode.cn id=1019 lang=javascript
 *
 * [1019] 链表中的下一个更大节点
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
 * @return {number[]}
 */

// const {
//   ListNode,
//   transferListToArray,
//   getLinkedListFromArray,
// } = require('./linked-list-utils');
var nextLargerNodes = function (head) {
  const answer = [];
  while (head) {
    let tmp = head.next;
    while (tmp) {
      if (tmp.val > head.val) {
        answer.push(tmp.val);
        break;
      }
      tmp = tmp.next;
    }
    if (!tmp) answer.push(0);
    head = head.next;
  }
  // console.log(answer);
  return answer;
};
// const head = getLinkedListFromArray([1, 7, 5, 1, 9, 2, 5, 1]);
// nextLargerNodes(head);
// @lc code=end
