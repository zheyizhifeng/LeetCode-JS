/*
 * @lc app=leetcode.cn id=528 lang=javascript
 *
 * [528] 按权重随机选择
 */

// @lc code=start
/**
 * @param {number[]} w
 */
var Solution = function (w) {
  this.sum = w.reduce((a, b) => a + b);
  const weights = [];
  for (let i = 0; i < w.length; i++) {
    if (i === 0) weights[i] = w[i];
    else weights[i] = weights[i - 1] + w[i];
  }
  this.weights = weights;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  const rand = Math.random() * this.sum;
  // for (let i = 0; i < this.weights.length; i++) {
  //   if (rand < this.weights[i]) return i;
  // }
  /* 2分查找 */
  let left = 0;
  let right = this.weights.length - 1;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2)
    if (this.weights[mid] < rand) {
      left = mid + 1;
    } else {
      right = mid
    }
  }
  return left;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
// @lc code=end
