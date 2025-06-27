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
  let need = {},
    window = {};
  for (let c of t) {
    need[c] = (need[c] || 0) + 1;
  }

  let left = 0,
    right = 0;
  let valid = 0;
  // 记录最小覆盖子串的起始索引及长度
  let start = 0,
    len = Infinity;
  while (right < s.length) {
    // c 是将移入窗口的字符
    let c = s[right];
    // 扩大窗口
    right++;
    // 进行窗口内数据的一系列更新
    if (need[c]) {
      // c 是有效字符
      window[c] = (window[c] || 0) + 1;
      if (window[c] === need[c]) {
        // 数量满足了,有效加一个
        valid++;
      }
    }

    // 判断左侧窗口是否要收缩
    while (valid === Object.keys(need).length) {
      // 在这里更新最小覆盖子串
      if (right - left < len) {
        start = left;
        len = right - left;
      }
      // d 是将移出窗口的字符
      let d = s[left];
      // 缩小窗口
      left++;
      // 进行窗口内数据的一系列更新
      if (need[d]) {
        if (window[d] === need[d]) {
          valid--;
        }
        window[d]--;
      }
    }
  }
  // 返回最小覆盖子串
  return len === Infinity ? '' : s.substring(start, start + len);
};
