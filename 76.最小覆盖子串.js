// @algorithm @lc id=76 lang=javascript 
// @title minimum-window-substring
// @test("ADOBECODEBANC","ABC")="BANC"
// @test("a","a")="a"
// @test("a","aa")=""
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  // 排除长度条件不满足的情况
  if (s.length < t.length) return ''
  // 统计 t 的频次表
  let needMap = new Map();
  for (let c of t) {
    needMap.set(c, (needMap.get(c) || 0) + 1);
  }
  // 当前滑动窗口
  let window = new Map();
  // 当前已满足条件的字符总数
  let valid = 0;
  // 窗口双指针
  let l = 0, r = 0;
  let minLen = Infinity;
  let result = '';

  while (r < s.length) {
    const char = s[r];
    //  need 中没有该字符
    if (!needMap.has(char)) {
      r++;
      continue;
    }
    // 扩大窗口, 更新当前字符 char 的频次： +1
    window.set(char, (window.get(char) || 0) + 1);
    // 判断 char 的插入是否满足某个字符达标
    if (window.get(char) === needMap.get(char)) {
      valid++;
    }
    // 判断是否满足 valid === needMap.size, 如果满足, 要收缩窗口
    while (valid === needMap.size) {
      // 更新答案
      let curLen = r - l + 1;
      if (curLen < minLen) {
        minLen = curLen;
        result = s.slice(l, r + 1);
      }
      // 收缩窗口: 只要一直达标，一直收缩
      const leftChar = s[l];
      window.set(leftChar, (window.get(leftChar) || 0) - 1);
      if (needMap.has(leftChar) && window.get(leftChar) < needMap.get(leftChar)) {
        valid--;
      }
      l++;
    }
    // 移动右指针
    r++;
  }
  return result;
};