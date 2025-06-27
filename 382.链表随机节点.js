/*
 * @lc app=leetcode.cn id=382 lang=javascript
 *
 * [382] 链表随机节点
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
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function (head) {
  this.head = head;
  this.headCopy = head;
  this.count = 0;
  while (head) {
    this.count++;
    head = head.next;
  }
};

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  const randomIndex = Math.floor(Math.random() * this.count);
  let result;
  for (let i = 0; i < randomIndex; i++) {
    this.head = this.head.next;
  }
  result = this.head.val;
  this.head = this.headCopy
  return result
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
// @lc code=end
