/*
 * @lc app=leetcode.cn id=817 lang=javascript
 *
 * [817] 链表组件
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
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function (head, G) {
  let start = head;
  let ans = 0;
  const set = new Set();
  for (let c of G) {
    set.add(c);
  }
  while (start) {
    if (set.has(start.val) && (!start.next || !set.has(start.next.val))) {
      ans++;
    }
    start = start.next;
  }
  return ans;
};
// @lc code=end
