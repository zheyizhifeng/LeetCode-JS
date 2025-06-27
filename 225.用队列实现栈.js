/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
let MyStack = function () {
  this.queue = [];
  this._queue = [];
};

MyStack.prototype.push = function (x) {
  this.queue.push(x);
};

MyStack.prototype.pop = function () {
  // 例如：【1,2,3】 
  // _queue: [1,2], queue: [3], 
  // ans = queue.shift() 栈顶是 3, queue = [];

  // queue: [1,2], _queue = []; 
  // 整个过程下来，扣掉了栈顶的元素
  while (this.queue.length > 1) {
    this._queue.push(this.queue.shift());
  }
  let ans = this.queue.shift();
  while (this._queue.length) {
    this.queue.push(this._queue.shift());
  }
  return ans;
};

MyStack.prototype.top = function () {
  return this.queue.slice(-1)[0];
};

MyStack.prototype.empty = function () {
  return !this.queue.length;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end
