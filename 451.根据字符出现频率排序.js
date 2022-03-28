// @algorithm @lc id=451 lang=javascript 
// @title sort-characters-by-frequency
// @test("tree")="eert"
// @test("cccaaa")="aaaccc"
// @test("Aabb")="bbAa"
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  const map = new Map();
  let maxCount = 0
  for(let c of s) {
    const count = (map.get(c) || 0) + 1
    map.set(c, count)
    if (count > maxCount) {
      maxCount = count
    }
  }
  const bucket = new Array(maxCount + 1).fill(0).map(_ => [])
  for (let [c,v] of map) {
    bucket[v].push(c)
  }
  let ans = ''
  for(let i = maxCount; i >= 0; i--) {
    for(let c of bucket[i]) {
      ans += c.repeat(i)
    }
  }
  return ans
};