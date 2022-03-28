// @algorithm @lc id=340 lang=javascript
// @title lengthOfLongestSubstringKDistinct
// @test("eceba", 3)=4
// @test("WORLD", 4)=4
// @test("kb", 10)=2
// @test("eqgkcwGFvjjmxutystqdfhuMblWbylgjxsxgnoh", 16)=27
// @test("nfhiexxjrtvpfhkrxcutexxcodfioburrtjefrgwrnqtyzelvtpvwdvvpsbudwtiryqzzy", 25)=70
/**
 * @param s: A string
 * @param k: An integer
 * @return: An integer
 */
var lengthOfLongestSubstringKDistinct = function (s, k) {
  if (s.length === 0 || k === 0) return 0;
  if (s.length < k) return s.length;
  const window = new Map();
  let l = 0;
  let r = 0;
  let maxLength = 0;
  let count = 0;
  
  while (r < s.length) {
    const rightChar = s[r]
    if (!window.has(rightChar) || window.get(rightChar) === 0) {
      count++;
    }
    window.set(rightChar, (window.get(rightChar) || 0) + 1)
    r++;
    while (count > k) {
      const leftChar = s[l]
      window.set(leftChar, window.get(leftChar) - 1)
      if (window.get(leftChar) === 0) {
        count--
      }
      l++
    }
    if (r - l > maxLength) {
      maxLength = r - l
    }
  }
  return maxLength;
};