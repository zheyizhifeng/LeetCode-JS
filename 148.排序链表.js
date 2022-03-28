/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
function mergeSortedList(l1, l2) {
  // in-place 合并到 l1 上
  let head = new ListNode('head');
  const headCopy = head;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      head.next = l1;
      l1 = l1.next;
    } else {
      head.next = l2;
      l2 = l2.next;
    }
    head = head.next;
  }
  if (l1) {
    head.next = l1;
  }
  if (l2) {
    head.next = l2;
  }
  // console.log('headcopy => ', headCopy);
  return headCopy.next;
}
var sortList = function (head) {
  if (!head || !head.next) return head;
  let fast = head;
  let slow = head;
  let slowCopy = slow;
  while (fast && fast.next) {
    fast = fast.next.next;
    slowCopy = slow;
    slow = slow.next;
  }
  slowCopy.next = null;
  // console.log('head => ', head, ', slow => ', slow);
  return mergeSortedList(sortList(head), sortList(slow));
};

/* const list = new ListNode(
  5,
  new ListNode(
    2,
    new ListNode(
      1,
      new ListNode(
        8,
        new ListNode(
          4,
          new ListNode(
            3,
            new ListNode(
              6,
              new ListNode(
                10,
                new ListNode(7, new ListNode(5, new ListNode(9)))
              )
            )
          )
        )
      )
    )
  )
);
console.log('list => ', list);
console.log('after sorted => ', sortList(list)); */
// @lc code=end
