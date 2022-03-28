/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
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
var insertionSortList = function (head) {
  if (!head || !head.next) return head;
  // 需要一个指针指向当前已排序的最后一个位置，这里用的是head指针
  // 需要另外一个指针pre,每次从表头循环，这里用的是dummy表头指针。
  // 每次拿出未排序的节点，先和前驱比较，如果大于或者等于前驱，就不用排序了，直接进入下一次循环
  // 如果前驱小，则进入内层循环，依次和pre指针比较，插入对应位置即可。
  const dummy = new ListNode('head');
  dummy.next = head;
  let lastSorted = head;
  let prev = dummy;
  let cur = head.next;

  while (cur) {
    if (cur.val >= lastSorted.val) {
      // 无需插入，
      cur = cur.next;
      lastSorted = lastSorted.next;
    } else {
      // 准备插入
      prev = dummy;
      while (prev.next.val < cur.val) {
        prev = prev.next;
      }
      // 找到前驱prev
      lastSorted.next = cur.next; // 移除待插入cur
      cur.next = prev.next; // 修改cur后驱
      prev.next = cur; // 插入cur
      cur = lastSorted.next;
    }
  }
  return dummy.next;
};
// const head = getLinkedListFromArray([-1, 5, 3, 4, 0]);
// insertionSortList(head);
// @lc code=end
