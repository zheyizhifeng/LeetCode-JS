// @algorithm @lc id=20 lang=javascript
// @title valid-parentheses
import * as a from 'algm';
// @test("[{()}]")=true
// @test("([)]")=false
// @test("()")=true
// @test("()[]{}")=true
// @test("(]")=false
// @test("([])")=true
// @test("([)]")=false
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const left = new Set(['(', '[', '{']);
  const right = new Set([')', ']', '}']);
  for (let c of s) {
    if (left.has(c)) {
      stack.push(c);
    } else if (right.has(c)) {
      if (stack.length === 0) return false;
      const leftBracket = stack.pop();
      switch (c) {
        case ')':
          if (leftBracket !== '(') return false;
          break;
        case ']':
          if (leftBracket !== '[') return false;

          break;
        case '}':
          if (leftBracket !== '{') return false;
          break;

        default:
          break;
      }
    }
  }
  return stack.length === 0;
};
