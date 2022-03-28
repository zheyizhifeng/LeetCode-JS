/*
 * @lc app=leetcode.cn id=744 lang=javascript
 *
 * [744] 寻找比目标字母大的最小字母
 */

// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  const len = letters.length;
  if (target >= letters[len - 1] || target < letters[0]) {
    return letters[0];
  }
  let l = 0;
  let r = len - 1;
  while (l <= r) {
    let mid = Math.floor(l + (r - l) / 2);
    if (letters[mid] <= target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return letters[l];
};
// console.log(nextGreatestLetter(['c', 'f', 'j'], 'j'));
// @lc code=end
