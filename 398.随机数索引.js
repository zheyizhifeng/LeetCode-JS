/*
 * @lc app=leetcode.cn id=398 lang=javascript
 *
 * [398] 随机数索引
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
  this.len = nums.length;
};

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
  // 使用results 数组会导致空间复杂度高
  /* const result = [];
  for (let i = 0; i < this.nums.length; i++) {
    if (this.nums[i] === target) {
      result.push(i);
    }
  }
  const randomIndex = Math.floor(Math.random() * result.length)
  return result[randomIndex] */
  if (this.len === 1) return 0;
  let result = 0;
  let count = 0;
  for (let i = 0; i < this.len; i++) {
    if (this.nums[i] === target) {
      count++;
      if (Math.floor(Math.random() * count) === 0) result = i;
    }
  }
  return result;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
// @lc code=end
