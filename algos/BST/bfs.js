/** leetcode 102 Binary Tree Level Order Traversal
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function BinaryTree(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

const bfs = (root) => {
  const result = [];
  const q = [root];
  let l;
  while (q.length > 0) {
    l = q.length;
    const sub = [];
    for (let i = 0; i < l; i++) {
      sub.push(q[0].val);
      if (q[0].left !== null) q.push(q[0].left);
      if (q[0].right !== null) q.push(q[0].right);
      q.shift(q[0]);
    }
    result.push(sub);
  }
  // console.log(result.join(":").toString());
  return result;
};

const tree = new BinaryTree(4);
tree.left = new BinaryTree(2);
tree.right = new BinaryTree(5);
tree.left.left = new BinaryTree(1);
tree.left.right = new BinaryTree(3);

console.log(bfs(tree));
