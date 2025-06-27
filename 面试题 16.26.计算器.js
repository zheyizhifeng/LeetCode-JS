// @algorithm @lc id=1000027 lang=javascript
// @title calculator-lcci
import * as a from 'algm';
// @test("14-3/2")=13
// @test("3+2*2")=7
// @test(" 3/2 ")=1
// @test(" 3+5 / 2 ")=5
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const stack = []; // 存储中间结果的栈
  let num = 0; // 当前累积的数字
  let sign = '+'; // 前一个运算符（默认为加号）

  for (let c of s) {
    if (c === ' ') continue;
    if (/\d/.test(c)) {
      // 数字
      num = num * 10 + +c;
      // 得到完整的多位数字，比如 123, 而不是只得到第一位 “1”
      continue;
    }

    switch (sign) {
      case '+':
        stack.push(num);
        break;
      case '-':
        stack.push(-num);
        break;
      case '*':
        stack.push(stack.pop() * num);
        break;
      case '/':
        stack.push(Math.trunc(stack.pop() / num));
        break;
      default:
        break;
    }
    num = 0;
    sign = c;
  }

  // 额外处理最后一个数字
  switch (sign) {
    case '+':
      stack.push(num);
      break;
    case '-':
      stack.push(-num);
      break;
    case '*':
      stack.push(stack.pop() * num);
      break;
    case '/':
      stack.push(Math.trunc(stack.pop() / num));
      break;
    default:
      break;
  }

  return stack.reduce((a, b) => a + b);
};
