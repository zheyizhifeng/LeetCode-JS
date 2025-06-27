// @algorithm @lc id=100200 lang=javascript
// @title bracket-lcci
import * as a from 'algm';
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];
  function backtrack(path, left, right) {
    // path：当前已经生成的括号字符串
    // left：已经用掉的左括号数量
    // right：已经用掉的右括号数量
    if (path.length === n * 2) {
      result.push(path);
      return;
    }
    if (left < n) {
      // 还能加左括号：只要左括号没用完（left < n），就可以加一个 '('。
      backtrack(path + '(', left + 1, right);
    }
    if (right < left) {
      // 还能加右括号：只要右括号没用完，并且右括号数量小于左括号数量（right < left），就可以加一个 ')'。
      backtrack(path + ')', left, right + 1);
    }
  }
  backtrack('', 0, 0);
  return result;
};
