/*
 * @lc app=leetcode.cn id=1457 lang=javascript
 *
 * [1457] 二叉树中的伪回文路径
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// const { getTreeFromArray } = require('./binary-tree-utils');
var pseudoPalindromicPaths = function (root) {
  let count = 0;
  /*   function isFakePalindrome(arr) {
    const map = new Map();
    for (let c of arr) {
      map.set(c, map.has(c) ? map.get(c) + 1 : 1);
    }
    let oddOccurrences = 0
    for(let times of map.values()) {
      if (times % 2 === 1) {
        oddOccurrences++;
        if (oddOccurrences > 1) return false;
      }
    }
    return true;
  } */
  function isFakePalindrome(arr) {
    let result = 0;
    while (arr.length > 0) {
      const val = arr.shift();
      result ^= 1 << (val - 1);
    }
    if (result === 0 || (result & (result - 1)) === 0) return true;
    return false;
  }

  function traverse(path = [], root) {
    if (!root) return;
    if (!root.left && !root.right) {
      path.push(root.val);
      if (isFakePalindrome(path)) {
        count++;
      }
    } else {
      traverse(path.concat(root.val), root.left);
      traverse(path.concat(root.val), root.right);
    }
  }
  traverse([], root);
  return count;
};

// const root = getTreeFromArray([2, 1, 1, 1, 3, null, null, null, null, null, 1]);
// pseudoPalindromicPaths(root);
// @lc code=end
