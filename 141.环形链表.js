/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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

// var hasCycle = function(head) {
//     let map = new Map()
//     while(head) {
//       if (map.has(head)) {
//         return true
//       }
//       map.set(head, true)
//       head = head.next
//     }
//     return false
// };

var hasCycle = function (head) {
  let fastP = head;
  let slowP = head;
  while (fastP && fastP.next && fastP.next.next) {
    slowP = slowP.next;
    fastP = fastP.next.next;
    if (slowP === fastP) {
      return true;
    }
  }
  return false;
};
// @lc code=end
