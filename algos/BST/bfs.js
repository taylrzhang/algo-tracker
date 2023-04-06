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
function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

const bfs = (tree) => {
  if (!root) return [];
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
  return result;
};
