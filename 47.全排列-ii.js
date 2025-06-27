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
  const set = new Set();
  const result = [];
  function backtrack(path = [], selectList = []) {
    if (path.length === nums.length) {
      // console.log('>>>>>', path);
      if (!set.has(path.toString())) {
        result.push(path.slice()); //! PS: 此处一定要 slice或concat 浅拷贝
        set.add(path.toString())
      }
    } else {
      for (let i = 0; i < selectList.length; i++) {
        path.push(selectList[i]);
        backtrack(path, selectList.slice(0, i).concat(selectList.slice(i + 1)));
        path.pop();
      }
    }
  }
  backtrack([], nums);
  return result;
};

// permuteUnique([1, 1, 2]);

// @lc code=end
