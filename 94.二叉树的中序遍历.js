// @algorithm @lc id=94 lang=javascript 
// @title binary-tree-inorder-traversal
import * as a from 'algm'
import { TreeNode } from 'algm'
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
var inorderTraversal = function(root) {
    if (!root) return []
    const result = []
    const stack = [];
    /**
     * 中序输出顺序：左 根 右
     * 对应的栈顺序：右 根 左
     */
    while(stack.length || root) {
      while(root) {
        /** 找到最左的左子树 */
        stack.push(root);
        root = root.left;
      }
      const node = stack.pop(); //  栈顶的左节点
      result.push(node.val);
      root = node.right;
    }

    return result;
};