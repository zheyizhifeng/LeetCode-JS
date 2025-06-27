/*
 * @lc app=leetcode.cn id=142 lang=javascript
 * @lcpr version=30201
 *
 * [142] 环形链表 II
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
/**
 * a: head 到环的入口的距离
 * b: 环的入口到 fast 和 slow 相遇的距离
 * c: 环的长度
slow 走过的距离 = a + b
fast 走过的距离 = 2(a + b)
fast 多走的距离 = (a + b) = n * c （fast 多绕了 n 圈）
=> a = n * c - b = (c - b) + (n - 1)*c
a ≡ c - b   （mod c）
也就是说, slow 从相遇点出发, 走 a 步就能到达环的入口
而，从 head 出发的 newPtr 也走 a 步就能到达环的入口
 */
var detectCycle = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next; // 慢指针每次走一步
    fast = fast.next.next; // 快指针每次走两步
    if (fast === slow) {
      // fast 追上了 slow, 相遇了,说明有环
      break;
    }
  }
  if (!fast || !fast.next) {
    // fast 走到链表末尾了,说明没有环
    return null;
  }
  // 相遇后,用一个新指针重新指向 head
  let newPtr = head;
  while (newPtr !== slow) {
    newPtr = newPtr.next; // newPtr 每次走一步
    slow = slow.next; // slow 每次走一步
  }
  // fast 和 slow 相遇的点就是环的入口
  return newPtr; // 返回环的入口节点
};
// @lc code=end

/*
// @lcpr case=start
// [3,2,0,-4]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n0\n
// @lcpr case=end

// @lcpr case=start
// [1]\n-1\n
// @lcpr case=end

 */
