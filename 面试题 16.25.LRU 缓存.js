// @algorithm @lc id=1000026 lang=javascript
// @title lru-cache-lcci

class LRUCache {
  // 有点FIFO
  constructor(capacity) {
    this.map = new Map();
    this.capacity = capacity;
  }
  get(key) {
    if (this.map.has(key)) {
      // 要调整位置，key 要来到最前面
      const value = this.map.get(key);
      this.map.delete(key);
      this.map.set(key, value);
      return value;
    } else {
      return -1;
    }
  }
  put(key, value) {
    if (this.map.has(key)) {
      // 覆盖也要调整到最前面
      this.map.delete(key);
      this.map.set(key, value);
    } else if (this.map.size < this.capacity) {
      this.map.set(key, value);
    } else {
      // 移除最早的 key
      const firstKey = [...this.map.keys()][0];
      this.map.delete(firstKey);
      this.map.set(key, value);
    }
  }
}
