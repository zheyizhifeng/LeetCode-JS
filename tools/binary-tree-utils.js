function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function transferTreeToArray(root) {
  if (!root) return [];
  const queue = [root];
  const result = [];
  while (queue.length > 0) {
    const node = queue.shift();
    if (!node) {
      result.push(null);
      continue;
    } else {
      result.push(node.val);
    }
    queue.push(node.left);
    queue.push(node.right);
  }
  while (!result[result.length - 1]) {
    result.pop();
  }
  return result;
}

function getTreeFromArray(arr) {
  if (arr.length === 0) return null;
  let root = new TreeNode(arr[0]);
  const queue = [root];
  let index = 0;
  while (queue.length > 0) {
    const node = queue.shift();
    index++;
    if (index < arr.length && arr[index] !== null) {
      node.left = new TreeNode(arr[index]);
      queue.push(node.left);
    }
    index++;
    if (index < arr.length && arr[index] !== null) {
      node.right = new TreeNode(arr[index]);
      queue.push(node.right);
    }
  }
  return root;
}

module.exports = {
  TreeNode,
  transferTreeToArray,
  getTreeFromArray,
};
