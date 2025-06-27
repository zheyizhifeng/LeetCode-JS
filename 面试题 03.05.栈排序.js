// @algorithm @lc id=100173 lang=javascript
// @title sort-of-stacks-lcci

class SortedStack {
  constructor() {
    this.stack = [];
  }
  push(n) {
    const len = this.stack.length;
    if (len === 0) {
      this.stack.push(n);
    } else {
      // 逆序插入排序
      let i = len - 1;
      while (n <= this.stack[i]) {
        i--;
      }
      if (i < 0) {
        // 追加到末尾
        this.stack.push(n);
      } else {
        // 替换当前值，并以此修改后续值
        for (let j = len; j > i; j--) {
          this.stack[j] = this.stack[j - 1];
        }
        this.stack[i] = n;
      }
    }
  }
  peek() {
    return this.isEmpty() ? -1 : this.stack[this.stack.length - 1];
  }
  pop() {
    this.stack.pop();
  }
  isEmpty() {
    return this.stack.length === 0;
  }
}
