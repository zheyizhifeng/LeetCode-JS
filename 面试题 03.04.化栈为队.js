// @algorithm @lc id=100170 lang=javascript
// @title implement-queue-using-stacks-lcci

class MyQueue {
  // 先进先出
  constructor() {
    this.in = [];
    this.out = [];
  }
  push(n) {
    this.in.push(n);
  }
  pop() {
    if (this.out.length === 0) {
      // 关键步骤：当输出栈为空时，将输入栈所有元素移过来
      while (this.in.length > 0) {
        this.out.push(this.in.pop());
      }
    }
    return this.out.pop();
  }
  peek() {
    // 返回头部元素
    if (this.out.length === 0) {
      // 关键步骤：当输出栈为空时，将输入栈所有元素移过来
      while (this.in.length > 0) {
        this.out.push(this.in.pop());
      }
    }
    return this.out[this.out.length - 1];
  }
  empty() {
    return this.in.length === 0 && this.out.length === 0;
  }
}
