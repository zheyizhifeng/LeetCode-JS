/*
 * @lc app=leetcode.cn id=710 lang=javascript
 *
 * [710] 黑名单中的随机数
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} blacklist
 */
var Solution = function (n, blacklist) {
  this.sz = n - blacklist.length;
  // 创建一个字典，用于快速查找黑名单中的元素
  this.map = new Map();
  blacklist.forEach((black) => {
    this.map.set(black, false); // 第一次循环，标记，便于后续O(1)查找是否存在
  });
  let last = n - 1; // 从后往前写
  blacklist.forEach((b) => {
    if (b >= this.sz) {
      // 遇到>= this.sz 的不用变化
      return;
    }
    while (this.map.has(last)) {
      // 2次循环跳过元素本身就在黑名单的情况
      last--;
    }
    this.map.set(b, last);
    last--;
  });
};

/**
 * @return {number}
 */
Solution.prototype.pick = function () {
  let randIndex = Math.floor(Math.random() * this.sz);
  // 如果该索引位是黑名单中的元素，则将其映射到新的位置上
  if (this.map.has(randIndex)) {
    return this.map.get(randIndex);
  }
  return randIndex;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n, blacklist)
 * var param_1 = obj.pick()
 */
// @lc code=end
