// @algorithm @lc id=76 lang=javascript
// @title minimum-window-substring
// @test("ADOBECODEBANC","ABC")="BANC"
// @test("a","a")="a"
// @test("a","aa")=""
// @test("abc", "cba")="abc"
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (s.length < t.length) return ''; // * 长度条件不满足，直接排除
  const need = new Map(); // * 需要覆盖的字符频次 map
  const window = new Map(); // * 滑动窗口的字符频次 map
  let validCount = 0; // ! 若 validCount === need.size,表示 window 完全覆盖了 need 的所有字符

  for (let c of t) {
    need.set(c, need.has(c) ? need.get(c) + 1 : 1);
  }

  let l = 0; // * s 的滑动窗口左侧
  let r = 0; // * s 的滑动窗口右侧，注意此处，下标从【0】开始
  let start = 0; // * 指向目标子串开头
  let minLength = Infinity;
  // ! 最终返回的目标子串 ans = s.slice(start, start + minLength)

  while (r <= s.length) { // ! 注意[left, right)的区间，right为实际下标的下一位, 故而可以取到 s.length
    if (validCount === need.size) {
      // * window 包含了 need
      const leftChar = s[l];
      if (r - l < minLength) {
        start = l;
        minLength = r - l;
      }
      if (window.has(leftChar)) {
        if (window.get(leftChar) === need.get(leftChar)) {
          validCount--;
        }
        window.set(leftChar, window.get(leftChar) - 1);
      }

      l++;
    } else {
      // * window 未包含 need
      if (r < s.length) {
        const rightChar = s[r];
        if (need.has(rightChar)) {
          window.set(rightChar, window.has(rightChar) ? window.get(rightChar) + 1 : 1);
          if (window.get(rightChar) === need.get(rightChar)) {
            validCount++;
          }
        }
      }
      r++;
    }
  }
  return minLength === Infinity ? '' : s.slice(start, start + minLength);
};
