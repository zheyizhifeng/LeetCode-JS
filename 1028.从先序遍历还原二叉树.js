/*
 * @lc app=leetcode.cn id=1028 lang=javascript
 *
 * [1028] 从先序遍历还原二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} S
 * @return {TreeNode}
 */
// const { TreeNode } = require('./binary-tree-utils');
var recoverFromPreorder = function (S) {
  const depthArr = S.split(/\d+/);
  depthArr.pop();
  const nodes = S.split(/-+/).map((val) => new TreeNode(val));
  function build(depths, nodes) {
    for (let i = 1; i < nodes.length; i++) {
      if (depths[i - 1].length === depths[i].length) {
        nodes[i - 2].right = nodes[i];
      } else if (depths[i - 1].length < depths[i].length) {
        nodes[i - 1].left = nodes[i];
      } else {
        let pre = i;
        while (depths[pre].length >= depths[i].length) {
          pre--;
        }
        nodes[pre].right = nodes[i];
      }
    }
  }
  build(depthArr, nodes);
  return nodes[0];
};
// recoverFromPreorder('1-2--3--4-5--6--7');
// @lc code=end
