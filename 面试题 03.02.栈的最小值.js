// @algorithm @lc id=100169 lang=javascript
// @title min-stack-lcci

class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }
  push(n) {
    this.stack.push(n);
    if (this.minStack.length === 0) {
      // 第一个元素直接放入，之后的要和前一个比
      this.minStack.push(n);
    } else {
      const prevMin = this.minStack[this.minStack.length - 1];
      this.minStack.push(Math.min(n, prevMin));
    }
  }
  pop() {
    this.stack.pop();
    this.minStack.pop();
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}
