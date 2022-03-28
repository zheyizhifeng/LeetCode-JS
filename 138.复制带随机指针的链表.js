/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
// const {
//   transferListToArray,
//   getLinkedListFromArray,
// } = require('./linked-list-utils');
var copyRandomList = function (head) {
  if (!head) return head;

  let cur = head;
  const map = new Map();
  // 第一次遍历，生成一个具有val属性的链表；
  while (cur) {
    map.set(cur, new Node(cur.val));
    cur = cur.next;
  }
  //第二次遍历，根据map映射关系，将random和next指针指向对应的节点或者null;
  cur = head;
  while (cur) {
    map.get(cur).next = map.get(cur.next) || null;
    map.get(cur).random = map.get(cur.random) || null;
    cur = cur.next;
  }
  return map.get(head);
};
// @lc code=end
