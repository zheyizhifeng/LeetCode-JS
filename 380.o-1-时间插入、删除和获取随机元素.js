/*
 * @lc app=leetcode.cn id=380 lang=javascript
 *
 * [380] O(1) 时间插入、删除和获取随机元素
 */

// @lc code=start

var RandomizedSet = function() {
  this.map = new Map();
  this.array = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.map.has(val)) return false;
  this.array.push(val);
  this.map.set(val, this.array.length - 1);
  return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (this.map.has(val)) {
    // 待删除元素置换到尾巴, pop之
    const delIndex = this.map.get(val);
    const top = this.array[this.array.length - 1];
    this.array[delIndex] = top;
    this.array.pop();

    // 更新map中转换元素的新索引
    this.map.set(top, delIndex)

    this.map.delete(val);
    return true;
  };
  return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  const len = this.array.length;
  const randomIndex = Math.floor(Math.random() * len);
  return this.array[randomIndex];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end
