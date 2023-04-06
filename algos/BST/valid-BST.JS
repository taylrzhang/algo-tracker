/* 
  Given a node representing the root of a binary tree, write a function to check if it is a valid binary *search* tree. 
  
  A binary tree is a valid binary search tree if it satisfies the following constraints:
    - For any given node, the value of ALL of the child nodes in its left branches must be less than its value.
    - For any given node, the value of ALL of the child nodes in its right branches must be greater than its value.
    - The tree contains no duplicate values.

  For example, this would be a valid BST:

         4
       /   \ 
     2      5
   /   \
  1     3

  whereas this would not be a valid BST:

         3
       /   \
     2      5
   /   \
  1    *4*

  because the node with value 4 on the left-hand side of the tree, but it's value is greater than the root node value 3.
  For this to be considered a valid BST the tree would need to look like this:
  
         3
       /   \
     2      5
   /      /
  1     *4*

*/
function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// const validBST = (tree) => {
//   const depthFirstSearch = (tree, max, min) => {
//     if (!tree) return true;
//     if (tree.value >= max || tree.value <= min) {
//       return false;
//     }
//     // console.log(tree.value);
//     return (
//       depthFirstSearch(tree.left, tree.value, min) &&
//       depthFirstSearch(tree.right, max, tree.value)
//     );
//   };
//   return depthFirstSearch(tree, Infinity, -Infinity);
// };

const validBST = (tree) => {
  //depthfirstIn all values in tree and push to an array
  //loop through array make sure values are in ascending order
  const values = [];

  const depthFirstIn = (tree) => {
    if (!tree) return;
    console.log(tree.value);
    depthFirstIn(tree.left);
    values.push(tree.value);
    depthFirstIn(tree.right);
  };
  depthFirstIn(tree);
  console.log(values);
  for (let i = 0; i < values.length; i++) {
    if (values[i + 1] < values[i]) return false;
  }
  return true;
};
const tree = new BinaryTree(5);
tree.left = new BinaryTree(1);
tree.right = new BinaryTree(4);
tree.right.left = new BinaryTree(3);
tree.right.right = new BinaryTree(6);

// const tree = new BinaryTree(4);
// tree.left = new BinaryTree(2);
// tree.right = new BinaryTree(5);
// tree.left.left = new BinaryTree(1);
// tree.left.right = new BinaryTree(3);

console.log(validBST(tree));
