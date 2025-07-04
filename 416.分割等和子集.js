// @algorithm @lc id=416 lang=javascript 
// @title partition-equal-subset-sum
// @test([1,5,11,5])=true
// @test([1,2,3,5])=false
/**
 * @param {number[]} nums
 * @return {boolean}
 * 递归+记忆
 */
var canPartition = function (nums) {
  // 集合不够分，直接返回 false
  if (nums.length <= 1) return false;
  const sum = nums.reduce((a, b) => a + b);
  // 找到两个和相等的子集 <=> 找到和为 target 【sum/2】的子集
  // 总和为奇数，直接返回 false
  if (sum % 2 === 1) return false;
  const target = sum / 2;
  const memo = new Map();

  function dfs(curSum, i) {
    if (i >= nums.length || curSum > target) return false;
    if (curSum === target) return true;
    // 描述一个问题的key
    const key = `${curSum}&${i}`;
    // 如果memo中有对应的缓存值，直接使用
    if (memo.has(key)) {
      return memo.get(key);
    }
    // 选nums[i]，当前和变为curSum+nums[i]，考察的指针移动一位
    // 不选nums[i]，当前和还是curSum，考察的指针移动一位
    const res = dfs(curSum + nums[i], i + 1) || dfs(curSum, i + 1);
    // 计算的结果存入memo
    memo.set(key, res);
    return res;
  }
  return dfs(0, 0);
};