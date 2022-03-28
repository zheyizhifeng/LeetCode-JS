// @algorithm @lc id=2 lang=typescript
// @title add-two-numbers
// @test([2,4,3],[5,6,4])=[7,0,8]
// @test([0],[0])=[0]
// @test([9,9,9,9,9,9,9],[9,9,9,9])=[8,9,9,9,0,0,0,1]
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0; // 进位
  let head = new ListNode('head'); // 头结点保存整条链表
  let dummy = head;
  while (l1 || l2 || carry) {
    let v1 = 0;
    let v2 = 0;
    if (l1) {
      v1 = l1.val;
      l1 = l1.next;
    }
    if (l2) {
      v2 = l2.val;
      l2 = l2.next;
    }
    head.next = new ListNode((v1 + v2 + carry) % 10);
    carry = Math.floor((v1 + v2 + carry) / 10);
    head = head.next;
  }
  return dummy.next;
};