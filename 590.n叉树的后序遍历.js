/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
  /**
   * 递归
   */
  /* const result = [];
  function traverse(root) {
    if (!root) return [];
    for (let child of root.children) {
      traverse(child)
    }
    result.push(root.val);
  }
  traverse(root)
  return result; */
  const result = [];
  if (!root) return result;
  const stack = [root];
  while (stack.length > 0) {
    const node = stack.pop();
    result.unshift(node.val);
    for (let child of node.children) {
      stack.push(child);
    }
  }
  return result;
};
// @lc code=end
