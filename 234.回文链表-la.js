/*
 * @lc app=leetcode.cn id=234 lang=javascript
 * @lcpr version=30201
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head || !head.next) return true; // 空链表或单节点链表是回文
  let left = head;
  let right = getRight(head);
  let reverseRight = reverse(right);
  console.log('left >>>', left);
  console.log('right >>>', right);
  console.log('reverseRight >>>', reverseRight);
  console.log('head >>>', head);
  while (left !== right) {
    if (left.val !== reverseRight.val) {
      return false; // 如果有不相等的值，返回 false
    }
    left = left.next; // 移动到下一个节点
    reverseRight = reverseRight.next; // 移动到下一个节点
  }
  return true;
};

/**
 * 反装链表
 */
function reverse(head) {
  let res = null;
  let cur = head;
  while (cur) {
    const next = cur.next;
    cur.next = res;
    res = cur;
    cur = next;
  }
  return res;
}

/**
 * 找到链表的右半部分
 * 区分奇数和偶数长度的链表
 */
function getRight(head) {
  if (!head || !head.next) return head;
  // 快慢指针法
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // 如果是奇数长度，slow指向中间节点，如 1->2->3, slow 指向 2—>3;
  // 如果是偶数长度，slow指向右半部分的头节点，如 1->2->3->4, slow 指向 3->4;
  return slow;
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

 */
