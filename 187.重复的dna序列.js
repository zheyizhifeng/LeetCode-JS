/*
 * @lc app=leetcode.cn id=187 lang=javascript
 *
 * [187] 重复的DNA序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  /**
   * Hash Map
   */
  /*   const result = [];
  const map = new Map();
  for (let i = 0; i <= s.length - 10; i++) {
    const curS = s.slice(i, i + 10);
    if (map.get(curS) === 1) {
      result.push(curS);
    }
    map.set(curS, map.has(curS) ? map.get(curS) + 1 : 1);
  }
  return result; */
  ////////////////////////////////
  // 四进制 0: A, 1: C, 2: G, 3: T
  if (s.length <= 10) return [];
  const charMap = {
    A: 0,
    C: 1,
    G: 2,
    T: 3,
  };

  const result = [];
  const map = new Map();
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    sum = sum * 4 + charMap[s[i]];
  }
  map.set(sum, 1);
  for (let i = 1; i <= s.length - 10; i++) {
    // 以s[i]开头的10个字符对应的数值满足[一共20bit，需要与0xfffff相与]
    // sum[i] = ((sum[i-1] << 2) & 0xfffff) + charMap[s[i+9]]
    sum = ((sum << 2) & 0xfffff) + charMap[s[i + 9]];
    if (map.get(sum) === 1) {
      result.push(s.slice(i, i + 10));
    }
    map.set(sum, map.has(sum) ? map.get(sum) + 1 : 1);
  }
  return result;
};
// @lc code=end
