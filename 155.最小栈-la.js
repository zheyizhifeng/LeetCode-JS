/*
 * @lc app=leetcode.cn id=155 lang=javascript
 * @lcpr version=30201
 *
 * [155] 最小栈
 */

// @lc code=start

var MinStack = function () {
  this.stack = [];
  // minSeq[i] 维护stack[0~i]部分的最小值
  this.minSeq = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  // 整理最小值
  if (this.minSeq.length === 0) {
    this.minSeq.push(val);
  } else {
    this.minSeq.push(Math.min(val, this.getMin()))
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
  // 重整最小值
  this.minSeq.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  const lastIndex = this.minSeq.length - 1;
  return this.minSeq[lastIndex]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end



/*
// @lcpr case=start
// ["MinStack","push","push","push","getMin","pop","top","getMin"]\n[[],[-2],[0],[-3],[],[],[],[]]\n
// @lcpr case=end

 */
