/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @param {TreeNode} root
 * @return {number}
 */
const minDepth = (root) => {
  if (!root) return 0;
  if (root.left && root.right) {
    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
  } else if (root.left) {
    return 1 + minDepth(root.left);
  } else if (root.right) {
    return 1 + minDepth(root.right);
  } else {
    return 1;
  }
};

/* const minDepth = (root) => {
  if (root == null) return 0;

  const queue = [root];
  let depth = 1;

  while (queue.length) {
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const cur = queue.shift();
      if (cur.left == null && cur.right == null) {
        return depth;
      }
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }
    depth++; // 肯定有下一层，如果没有早就return了
  }
}; */

// @lc code=end
