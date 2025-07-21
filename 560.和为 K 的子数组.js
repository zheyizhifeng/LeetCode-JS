// @algorithm @lc id=560 lang=javascript 
// @title subarray-sum-equals-k
// @test([1,1,1],2)=2
// @test([1,2,3],3)=2
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 前缀和的含义
sum 表示从数组开头到当前位置的所有元素之和。
如果有两个位置的前缀和分别是 sum1 和 sum2，且 sum2 - sum1 = k，说明这两个位置【之间】的子数组和为 k。
 */
var subarraySum = function (nums, k) {
  // 记录每个前缀和出现的次数
  let map = new Map(); 
  // 初始 map.set(0, 1)，表示前缀和为0出现过1次（方便处理从头开始的子数组）。
  map.set(0, 1);
  let sum = 0;
  let ans = 0;
  for (let n of nums) {
    /**
     * 每遍历一个数 n：
    1. 累加到 sum。
    2. 检查 map 里有没有 sum - k：
      a) 有的话，说明之前有某个前缀和是 sum - k，那么从那个位置到当前位置的子数组和就是 k。
      b) 把 map.get(sum - k) 加到答案里（可能有多个这样的前缀和）。
    3. 把当前的 sum 记录到 map，出现次数加1。
     */
    sum += n;
    if (map.has(sum - k)) {
      ans += map.get(sum - k)
    }
    map.set(sum, (map.get(sum) || 0) + 1)
  }

  return ans;
};