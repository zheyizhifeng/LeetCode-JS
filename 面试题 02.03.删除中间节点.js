// @algorithm @lc id=100187 lang=javascript 
// @title delete-middle-node-lcci
import * as a from 'algm'
import { ListNode } from 'algm'
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  // 直接将下一个节点的值赋给当前节点
  // 然后将当前节点的 next 指向下一个节点的 next
  node.val = node.next.val;
  node.next = node.next.next;
};