/*
 * @lc app=leetcode.cn id=460 lang=javascript
 * @lcpr version=30101
 *
 * [460] LFU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */

var LFUCache = function (capacity) {
  // key 到 val 的映射，我们后文称为 KV 表
  this.keyToVal = new Map();
  // key 到 freq 的映射，我们后文称为 KF 表
  this.keyToFreq = new Map();
  // freq 到 key 列表的映射，我们后文称为 FK 表
  this.freqToKeys = new Map();
  // 记录最小的频次
  this.minFreq = 0;
  // 记录 LFU 缓存的最大容量
  this.cap = capacity;
};

LFUCache.prototype.get = function (key) {
  if (!this.keyToVal.has(key)) {
    return -1;
  }
  // 增加 key 对应的 freq
  this.increaseFreq(key);
  return this.keyToVal.get(key);
};

LFUCache.prototype.put = function (key, val) {
  if (this.cap <= 0) return;

  // 若 key 已存在，修改对应的 val 即可
  if (this.keyToVal.has(key)) {
    this.keyToVal.set(key, val);
    // key 对应的 freq 加一
    this.increaseFreq(key);
    return;
  }

  // key 不存在，需要插入
  // 容量已满的话需要淘汰一个 freq 最小的 key
  if (this.cap <= this.keyToVal.size) {
    this.removeMinFreqKey();
  }

  // 插入 key 和 val，对应的 freq 为 1
  // 插入 KV 表
  this.keyToVal.set(key, val);
  // 插入 KF 表
  this.keyToFreq.set(key, 1);
  // 插入 FK 表
  if (!this.freqToKeys.has(1)) {
    this.freqToKeys.set(1, new Set());
  }
  this.freqToKeys.get(1).add(key);
  // 插入新 key 后最小的 freq 肯定是 1
  this.minFreq = 1;
};

LFUCache.prototype.increaseFreq = function (key) {
  let freq = this.keyToFreq.get(key);
  // 更新 KF 表
  this.keyToFreq.set(key, freq + 1);
  // 更新 FK 表
  // 将 key 从 freq 对应的列表中删除
  let keyList = this.freqToKeys.get(freq);
  keyList.delete(key);
  // 将 key 加入 freq + 1 对应的列表中
  if (!this.freqToKeys.has(freq + 1)) {
    this.freqToKeys.set(freq + 1, new Set());
  }
  this.freqToKeys.get(freq + 1).add(key);
  // 如果 freq 对应的列表空了，移除这个 freq
  if (keyList.size === 0) {
    this.freqToKeys.delete(freq);
    // 如果这个 freq 恰好是 minFreq，更新 minFreq
    if (freq === this.minFreq) {
      this.minFreq++;
    }
  }
};

LFUCache.prototype.removeMinFreqKey = function () {
  // freq 最小的 key 列表
  let keyList = this.freqToKeys.get(this.minFreq);
  // 其中最先被插入的那个 key 就是该被淘汰的 key
  let deletedKey = keyList.values().next().value;
  // 更新 FK 表
  keyList.delete(deletedKey);
  if (keyList.size === 0) {
    this.freqToKeys.delete(this.minFreq);
    // 问：这里需要更新 minFreq 的值吗？
  }
  // 更新 KV 表
  this.keyToVal.delete(deletedKey);
  // 更新 KF 表
  this.keyToFreq.delete(deletedKey);
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end



/*
// @lcpr case=start
// ["LFUCache", "put", "put", "get", "put", "get", "get", "put", "get", "get", "get"][[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]]\n
// @lcpr case=end

 */
