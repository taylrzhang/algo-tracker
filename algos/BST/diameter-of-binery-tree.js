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

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

var diameterOfBinaryTree = function (root) {
  if (!root) return 0;
  let max = 0;

  const dfs = (node) => {
    if (!node) return 0;
    //console.log(node.value)
    let left = dfs(node.left);
    let right = dfs(node.right);
    // console.log(node.value, [left, right]);
    max = Math.max(left + right, max);
    // console.log(max);
    return Math.max(left, right) + 1;
  };

  dfs(root);
  return max;
};

const tree = new BinaryTree(4);
tree.left = new BinaryTree(2);
tree.right = new BinaryTree(5);
tree.left.left = new BinaryTree(1);
tree.left.right = new BinaryTree(3);

console.log(diameterOfBinaryTree(tree));
