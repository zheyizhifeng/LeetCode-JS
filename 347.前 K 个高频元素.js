// @algorithm @lc id=347 lang=javascript
// @title top-k-frequent-elements
// @test([1,1,1,2,2,3],2)=[1,2]
// @test([1],1)=[1]
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();
  let maxCount = 0; // 最大出现次数
  for (let n of nums) {
    const count = (map.get(n) || 0) + 1;
    map.set(n, count);
    if (count > maxCount) {
      maxCount = count;
    }
  }
  const buckets = new Array(maxCount + 1).fill(0).map((_) => []); // 按照次数生成的桶, 对应出现0次~maxCount次
  for (let [key, val] of map) {
    buckets[val].push(key); // 写入次数桶
  }
  let res = [];
  for (let i = maxCount; i >= 0; i--) {
    for (let n of buckets[i]) {
      res.push(n);
    }
    if (res.length === k) return res;
  }
};
