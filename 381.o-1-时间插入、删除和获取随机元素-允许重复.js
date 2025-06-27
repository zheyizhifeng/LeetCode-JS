/*
 * @lc app=leetcode.cn id=381 lang=javascript
 *
 * [381] O(1) 时间插入、删除和获取随机元素 - 允许重复
 */

// @lc code=start

var RandomizedCollection = function () {
  this.nums = [];
  this.valIdxs = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function (val) {
  this.nums.push(val);
  const valIdxs = this.valIdxs.get(val);
  const isNewVal = !this.valIdxs.has(val) || valIdxs.size === 0;
  const idxSet = isNewVal ? new Set() : valIdxs;
  idxSet.add(this.nums.length - 1);
  this.valIdxs.set(val, idxSet);
  return isNewVal;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function (val) {
  const valIdxSet = this.valIdxs.get(val);
  if (!this.valIdxs.has(val) || valIdxSet.size === 0) return false;

  let removeIdx = this.nums.length - 1;

  const endIndex = this.nums.length - 1;
  // if (valIdxSet.has(removeIdx)) { // valIdxSet.has(removeIdx) 等价于 this.nums[endIndex] === val
  if (this.nums[endIndex] === val) { // valIdxSet.has(removeIdx) 等价于 this.nums[endIndex] === val
    valIdxSet.delete(removeIdx);
    this.nums.pop();
  } else {
    const top = this.nums[endIndex];
    const topIdxSet = this.valIdxs.get(top);
    removeIdx = valIdxSet.values().next().value;
    [this.nums[removeIdx], this.nums[endIndex]] = [
      this.nums[endIndex],
      this.nums[removeIdx],
    ];
    // 一定要用Set结构，直接delelte栈顶的索引，如果用数组，无法在O(1)时间找到topIdxArray中栈顶索引的位置
    topIdxSet.delete(endIndex);
    topIdxSet.add(removeIdx);
    valIdxSet.delete(removeIdx);
    this.nums.pop();
  }
  return true;
};

/**
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function () {
  const randomIndex = Math.floor(Math.random() * this.nums.length);
  return this.nums[randomIndex];
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

// let collection = new RandomizedCollection(); // 初始化一个空的集合。
// collection.insert(10);
// collection;
// collection.insert(20);
// collection;
// collection.insert(30);
// collection;
// collection.insert(20);
// collection;
// collection.insert(10);
// collection;
// collection.insert(30);
// collection;
// collection.remove(10);
// collection;
// collection.remove(10);
// collection;
// collection.remove(30);
// collection;
// collection.remove(30);
// collection;
// collection.remove(30);
// collection;
// collection.insert(40);
// collection;
// collection.remove(30);
// collection;
// collection.remove(30);
// collection;
// console.log(collection.getRandom());
// console.log(collection.getRandom());
// console.log(collection.getRandom());
// console.log(collection.getRandom());
// console.log(collection.getRandom());
// console.log(collection.getRandom());
// console.log(collection.getRandom());
// console.log(collection.getRandom());
// console.log(collection.getRandom());
