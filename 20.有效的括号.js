/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let map = new Map();
  map.set(')', '(');
  map.set(']', '[');
  map.set('}', '{');
  let stack = [];
  for (let c of s) {
    if (map.has(c)) {
      // 右括号
      const top = stack.pop();
      if (map.get(c) !== top) {
        return false;
      }
    } else {
      stack.push(c);
    }
  }
  return stack.length === 0;
};
// @lc code=end
