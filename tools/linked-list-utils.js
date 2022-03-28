function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function getLinkedListLength(list) {
  let count = 0;
  while (list) {
    count++;
    list = list.next;
  }
  return count;
}

function transferListToArray(list) {
  const result = [];
  while (list) {
    result.push(list.val);
    list = list.next;
  }
  return result;
}

function getLinkedListFromArray(arr) {
  let head = new ListNode('head');
  const headCopy = head;
  while (arr.length > 0) {
    head.next = new ListNode(arr.shift());
    head = head.next;
  }
  return headCopy.next;
}

function Node(val, prev, next, child) {
  this.val = val;
  this.prev = prev;
  this.next = next;
  this.child = child;
}

module.exports = {
  ListNode,
  Node,
  getLinkedListLength,
  transferListToArray,
  getLinkedListFromArray,
};
