// @algorithm @lc id=142 lang=javascript
// @title linked-list-cycle-ii
// import * as a from 'algm'
// import { ListNode } from 'algm'
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
var detectCycle = function (head) {
  // * 考虑用map存下每个节点，进行遍历
  // const map = new Map();
  // while (head) {
  //   if (map.has(head)) return head;
  //   map.set(head, true);
  //   head = head.next;
  // }
  // return null;

  // * 若要求使用O(1)空间复杂度，便不可使用此方式
  let fast = head;
  let slow = head;
  while (fast && fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      /*
      * 设链表中环外部分的长度为 a。slow 指针进入环后，又走了 b 的距离与 fast 相遇。此时fast 指针已经走完了环的 n 圈，因此它走过的总距离为 a+n(b+c)+b=a+(n+1)b+nc。
      * 根据题意，任意时刻，fast 指针走过的距离都为 slow 指针的 22 倍。因此，我们有
      ! a+(n+1)b+nc = 2(a+b)⟹ a = c + (n−1)(b+c)
      * 我们会发现：从相遇点到入环点的距离加上 n−1 圈的环长，恰好等于从链表头部到入环点的距离。
      */

      slow = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }
  return null;
};

// const tailNode = new ListNode(4)
// const circularNode = new ListNode(2, new ListNode(0, tailNode))
// tailNode.next = circularNode
// const list = new ListNode(3, circularNode);
// detectCycle(list)
