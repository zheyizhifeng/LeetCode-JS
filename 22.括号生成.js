// @algorithm @lc id=22 lang=javascript
// @title generate-parentheses
import * as a from 'algm';
// @test(3)=["((()))","(()())","(())()","()(())","()()()"]
// @test(1)=["()"]
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  /**
   * left : 左括号 ( 数量
   * right: 右括号 ) 数量
   */
  const res = [];
  function backtrack(path, left, right) {
    if (path.length === n * 2) {
      res.push(path);
      return;
    }
    // 左括号 ( 没够，就继续添加
    if (left < n) backtrack(path + '(', left + 1, right);
    // 右括号要和左括号对应，数量只要还不够，就添加 ）
    if (right < left) backtrack(path + ')', left, right + 1);
  }
  backtrack('', 0, 0);
  return res;
};
