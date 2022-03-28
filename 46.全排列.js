/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  // for 选择 in 选择列表:
  //   # 做选择
  //   将该选择从选择列表移除
  //   路径.add(选择)
  //   backtrack(路径, 选择列表)
  //   # 撤销选择
  //   路径.remove(选择)
  //   将该选择再加⼊选择列表
  let result = [];
  function backTrack(path, selectList) {
    if (selectList.length === 0) {
      result.push(path);
    } else {
      for (let i = 0; i < selectList.length; i++) {
        backTrack(path.concat(selectList[i]), selectList.slice(0, i).concat(selectList.slice(i + 1)));
      }
    }
  }
  backTrack([], nums);
  return result;
};
/* var permute = function (nums) {
  // 路径: path
  // 选择列表: nums 中不在 path 中的所有元素
  // 终止条件: nums 中的元素都在 path 中出现
  const result = [];
  function backtrack(path, nums) {
    if (path.length === nums.length) {
      result.push(path);
    } else {
      for(let n of nums) {
        if (path.indexOf(n) > -1) {
          continue
        }
        path.push(n)
        backtrack(path.slice(), nums)
        path.pop()
      }
    }
  }
  backtrack([], nums);
  return result;
}; */
permute([1, 2, 3]);
// @lc code=end
