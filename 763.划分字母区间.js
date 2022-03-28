// @algorithm @lc id=768 lang=javascript 
// @title partition-labels
import * as a from 'algm'
// @test("ababcbacadefegdehijhklij")=[9,7,8]
// @test("eccbbbbdec")=[10]
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
  const len = s.length;
  const map = new Map();
  // * 记录每个字符最后的位置
  for (let i = 0; i < len; i++) {
    map.set(s[i], i);
  }
  const res = [];
  let prevPartLength = 0;
  let maxIndex = -Infinity;
  for(let i = 0; i < len; i++) {
    const lastIndex = map.get(s[i]); // * 当前字符最后一次出现的位置
    maxIndex = Math.max(lastIndex, maxIndex);
    if (i === maxIndex) {
      const finalLength = maxIndex + 1 - prevPartLength;
      res.push(finalLength);
      prevPartLength += finalLength;
    }
  }
  return res;
};