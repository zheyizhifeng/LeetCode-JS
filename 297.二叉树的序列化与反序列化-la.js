/*
 * @lc app=leetcode.cn id=297 lang=javascript
 * @lcpr version=30201
 *
 * [297] 二叉树的序列化与反序列化
 */

import { TreeNode } from 'algm';

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
/**
 *   层序遍历实现
 */
var serialize = function (root) {
  if (!root) return '';
  const reuslt = [];
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (node) {
      reuslt.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      reuslt.push(null);
    }
  }
  return reuslt.toString();
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (!data) return null;
  const list = data.split(',');
  const root = new TreeNode(Number(list[0]));
  const queue = [root];
  let i = 1;
  while(queue.length) {
    const node = queue.shift();
    if (list[i]) {
      node.left = new TreeNode(Number(list[i]));
      queue.push(node.left);
    }
    i++;
    if (list[i]) {
      node.right = new TreeNode(Number(list[i]));
      queue.push(node.right);
    }
    i++;
  }
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,null,null,4,5]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

 */
