/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
// const {
//   transferListToArray,
//   getLinkedListFromArray
// } = require('./linked-list-utils');

var isPalindrome = function (head) {
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

  function getRightList(head) {
    let fast = head;
    let slow = head;

    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow;
  }

  if (!head || !head.next) return true;
  const rightList = getRightList(head);
  // console.log('rightList => ', transferListToArray(rightList));
  // console.log('before reverse, head => ', transferListToArray(head));
  let reversed = reverseList(rightList);
  let prev = head;
  while (reversed && head) {
    if (reversed.val !== head.val) return false;
    prev = head;
    reversed = reversed.next;
    head = head.next;
  }
  return head ? head.val === prev.val : true;
};
// isPalindrome(getLinkedListFromArray([1, 2, 3, 3, 2, 1]));
// isPalindrome(getLinkedListFromArray([1, 2, 3, 4, 3, 2, 1]));
// @lc code=end
