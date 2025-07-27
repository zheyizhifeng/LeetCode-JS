// @algorithm @lc id=94 lang=javascript 
// @title binary-tree-inorder-traversal
// @test([1,null,2,3])=[1,3,2]
// @test([1,2,3,4,5,null,8,null,null,6,7,9])=[4,2,6,5,7,1,3,9,8]
// @test([])=[]
// @test([1])=[1]
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const result = [];
  const stack = [];
  let current = root; // 当前节点指针

  while (stack.length > 0 || current !== null) {
    // 1. 先往左走到底，压入所有左节点
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }

    // 2. 左走到底后，弹出栈顶（最左节点）并访问
    current = stack.pop();
    result.push(current.val);

    // 3. 处理右子树（此时右子树的左节点会被再次压入栈）
    current = current.right;
  }
  return result;
};