/*
 * @lc app=leetcode.cn id=384 lang=javascript
 *
 * [384] 打乱数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
  this._nums = nums.slice();
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this._nums;
};

/**
 * @return {number[]}
 */
function getRandomIndex(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}
Solution.prototype.shuffle = function () {
  const arr = this.nums;
  for (let i = 0; i < arr.length; i++) {
    const randIndex = getRandomIndex(i, arr.length - 1);
    [arr[i], arr[randIndex]] = [arr[randIndex], arr[i]];
  }
  return arr;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end
