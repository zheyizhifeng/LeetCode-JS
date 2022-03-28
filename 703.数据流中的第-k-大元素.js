/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第 K 大元素
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.arr = nums.sort((a, b) => a - b);
  this.kth = k;
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  // 插入有序数组
  let l = 0;
  let r = this.arr.length - 1;
  while (l <= r) {
    let mid = parseInt(l + (r - l) / 2);
    if (val <= this.arr[mid]) {
      r = mid - 1;
    } else if (val > this.arr[mid]) {
      l = mid + 1;
    }
  }
  this.arr.splice(l, 0, val);
  return this.arr[this.arr.length - this.kth];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end
// const kthLargest = new KthLargest(1, []);
// kthLargest.add(-3); // return 4
// kthLargest.add(-2); // return 5
// kthLargest.add(-4); // return 5
// kthLargest.add(0); // return 8
// kthLargest.add(4); // return 8
