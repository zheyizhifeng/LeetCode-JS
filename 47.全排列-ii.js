/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const result = new Map();
  function backtrack(path = [], selectList = []) {
    if (selectList.length === 0) {
      // result.push(path);
      let stringPath = path.toString();
      if (!result.has(stringPath)) {
        result.set(stringPath, true);
      }
    } else {
      for (let i = 0; i < selectList.length; i++) {
        backtrack(path.concat(selectList[i]), selectList.slice(0, i).concat(selectList.slice(i + 1)));
      }
    }
  }
  backtrack([], nums);
  return [...result.keys()].map((str) => str.split(','));
};

// permuteUnique([1, 1, 2]);

// @lc code=end
