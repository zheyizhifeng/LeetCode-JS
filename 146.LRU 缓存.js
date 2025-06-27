// @algorithm @lc id=146 lang=javascript
// @title lru-cache

class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map(); // 只负责存储 key-value 键值对
    this.head = new ListNode();
    this.tail = new ListNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  get(key) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      this.moveToHead(node); // 移动到最前面
      return node.value;
    }
    return -1
  }
  put(key, value) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      node.value = value;
      this.moveToHead(node); // 移到最前面
    } else {
      const node = new ListNode(key, value);
      this.map.set(key, node);
      this.addToHead(node); // 添加都最前面
    }
    if (this.map.size > this.capacity) {
      this.removeLastNode();
    }
  }
  removeNode(node) {
    // 删除节点, 实质是断开 node 和前后驱节点的联系
    node.prev.next = node.next
    node.next.prev = node.prev
  }
  moveToHead(node) {
    this.removeNode(node)
    this.addToHead(node)
  }
  addToHead(node) {
    // 添加到头部
    node.prev = this.head
    node.next = this.head.next
    node.prev.next = node
    node.next.prev = node
  }
  removeLastNode() {
    const lastNode = this.tail.prev;
    this.removeNode(lastNode)
    this.map.delete(lastNode.key)
  }
}