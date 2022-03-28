/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  function getLength(list) {
    let count = 0;
    while (list) {
      count++;
      list = list.next;
    }
    return count;
  }
  const length = getLength(head);
  let headList = new ListNode('head', head);
  let headCopy = headList;
  if (length <= 1) return null;
  let tmp = headList;
  for (let i = 1; i <= length - n + 1; i++) {
    tmp = headCopy;
    headCopy = headCopy.next;
  }
  tmp.next = headCopy.next;
  return headList.next;
};
// @lc code=end
