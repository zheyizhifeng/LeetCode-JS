/*
 * @lc app=leetcode.cn id=889 lang=javascript
 *
 * [889] 根据前序和后序遍历构造二叉树
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
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */

var constructFromPrePost = function (pre, post) {
  const map = new Map();
  for (let i = 0; i < post.length; i++) {
    map.set(post[i], i);
  }
  function buildTree(lPre, rPre, lPost, rPost) {
    if (lPre > rPre) return null;
    if (lPre === rPre) return new TreeNode(pre[lPre]);
    const root = new TreeNode(pre[lPre]);
    const leftRootVal = pre[lPre + 1];
    const leftRootIndex = map.get(leftRootVal);

    root.left = buildTree(lPre + 1, lPre + 1 + leftRootIndex - lPost, lPost, leftRootIndex);
    root.right = buildTree(rPre + leftRootIndex - rPost + 2, rPre, leftRootIndex + 1, rPost - 1);
    return root;
  }
  return buildTree(0, pre.length - 1, 0, post.length - 1);
};
// @lc code=end
