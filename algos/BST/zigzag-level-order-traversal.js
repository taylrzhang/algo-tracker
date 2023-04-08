/** 103. Binary Tree Zigzag Level Order Traversal
 * @param {TreeNode} root
 * @return {number[][]}
 */

function BinaryTree(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var zigzagLevelOrder = function (root) {
  if (!root) return [];
  const result = [];
  const q = [root];
  let l;
  let reverse = false;
  while (q.length > 0) {
    l = q.length;
    const sub = [];
    for (let i = 0; i < l; i++) {
      if (q[0].left !== null) q.push(q[0].left);
      if (q[0].right !== null) q.push(q[0].right);
      if (reverse) sub[l - 1 - i] = q[0].val;
      else sub[i] = q[0].val;

      q.shift(q[0]);
    }
    result.push(sub);
    reverse = !reverse;
  }
  return result;
};

const tree = new BinaryTree(1);
tree.left = new BinaryTree(2);
tree.right = new BinaryTree(3);
tree.left.left = new BinaryTree(4);
tree.right.right = new BinaryTree(5);

console.log(zigzagLevelOrder(tree));
