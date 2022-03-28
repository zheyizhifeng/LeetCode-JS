/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  const firstMap = new Map();
  const lastMap = new Map();
  const countMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!firstMap.has(nums[i])) {
      firstMap.set(nums[i], i);
    }
    lastMap.set(nums[i], i);
    countMap.set(nums[i], countMap.has(nums[i]) ? countMap.get(nums[i]) + 1 : 1);
  }
  // console.log('firstMap => ', firstMap);
  // console.log('lastMap => ', lastMap);
  // console.log('countMap => ', countMap);
  let ans = nums.length;
  const maxDep = Math.max(...countMap.values());
  // console.log('maxDep => ', maxDep);
  for (let [k, v] of countMap) {
    if (countMap.get(k) === maxDep) {
      ans = Math.min(ans, lastMap.get(k) - firstMap.get(k) + 1);
    }
  }
  return ans;
};
// @lc code=end
