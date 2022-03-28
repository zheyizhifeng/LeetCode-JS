/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
function Node(val, next) {
  this.val = val;
  this.next = next || null;
}

var MyLinkedList = function () {
  this.nodes = 0; // 节点数量
  this.head = new Node('head'); // 带dummy节点
  this.map = new Map();
  this.map.set(-1, this.head);
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.nodes) return -1;
  return this.map.get(index).val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  this.addAtIndex(0, val);
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  this.addAtIndex(this.nodes, val);
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.nodes) return;
  let prev = null;
  const node = new Node(val);
  if (index <= 0) {
    prev = this.map.get(-1);
  } else {
    prev = this.map.get(index - 1);
  }
  node.next = prev.next;
  prev.next = node;

  this.nodes++;
  this.updateMap();
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.nodes) return;
  const prev = this.map.get(index - 1);
  prev.next = prev.next.next;
  this.nodes--;
  this.updateMap();
};

MyLinkedList.prototype.updateMap = function () {
  let index = -1;
  let cur = this.head;
  while (cur) {
    // contain dummy
    this.map.set(index, cur);
    index++;
    cur = cur.next;
  }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end
