/**
 * PreOrder:
    Visit the root.
    Traverse the left subtree, i.e., call Preorder(left->subtree)
    Traverse the right subtree, i.e., call Preorder(right->subtree) 
 * Inorder:
    Traverse the left subtree, i.e., call Inorder(left->subtree)
    Visit the root.
    Traverse the right subtree, i.e., call Inorder(right->subtree)
 * PostOrder:
    Traverse the left subtree, i.e., call Postorder(left->subtree)
    Traverse the right subtree, i.e., call Postorder(right->subtree)
    Visit the root
 */
function BinaryTree(val, left, right) {
  this.val = val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function dfs(root) {
  console.log(root.val); // Preorder
  if (root.left) {
    dfs(root.left);
  }
  console.log(root.val); //Inorder*
  if (root.right) {
    dfs(root.right);
  }
  console.log(root.val); //Postorder
}

const tree = new BinaryTree(4);
tree.left = new BinaryTree(2);
tree.right = new BinaryTree(5);
tree.left.left = new BinaryTree(1);
tree.left.right = new BinaryTree(3);

/**
        4
       / \
      2  5
    / \
   1  3
 */

console.log(dfs(tree));
