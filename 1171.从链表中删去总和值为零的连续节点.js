/*
 * @lc app=leetcode.cn id=1171 lang=javascript
 *
 * [1171] 从链表中删去总和值为零的连续节点
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
var removeZeroSumSublists = function (head) {
  const map = new Map();
  let dummy = new ListNode(0);
  dummy.next = head;
  let prefixSum = 0;
  // 建立包含本节点的前缀和
  for (let d = dummy; d !== null; d = d.next) {
    prefixSum += d.val;
    map.set(prefixSum, d);
  }

  // 第二遍遍历 若当前节点处sum在下一处出现了, 则表明两结点之间所有节点和为0 直接删除区间所有节点
  prefixSum = 0;
  for (let d = dummy; d !== null; d = d.next) {
    prefixSum += d.val;
    d.next = map.get(prefixSum).next;
  }
  return dummy.next;
};

// const head = getLinkedListFromArray([1, 2, -3, 3, 1]);
// removeZeroSumSublists(head);
// @lc code=end
