// @algorithm @lc id=100305 lang=javascript
// @title er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof
import * as a from 'algm';
// @test([1])=[1]
// @test([4,2,5,1,3])=[1,2,3,4,5]
/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  if (!root) return null;
  const list = [];
  function middleTraverse(node) {
    if (!node) return;
    middleTraverse(node.left);
    list.push(node);
    middleTraverse(node.right);
  }
  middleTraverse(root);

  const n = list.length;
  for (let i = 0; i < n; i++) {
    let cur = list[i];
    let left = list[(i - 1 + n) % n];
    let right = list[(i + 1) % n];
    cur.left = left;
    cur.right = right;
  }
  return list[0];
};
