/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  if (root.children.length === 0) return 1;
  return (
    Math.max.apply(
      null,
      root.children.map((child) => maxDepth(child))
    ) + 1
  );
};
// @lc code=end
