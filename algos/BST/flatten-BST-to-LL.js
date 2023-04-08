/** leetcode 114 medium
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
Given the root of a binary tree, flatten the tree into a "linked list":

The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
The "linked list" should be in the same order as a pre-order traversal of the binary tree.
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

const flatten = (root) => {
  /*
  declare current node from root
  while the curr is not null
    if curr.left if not null, otherwise move to the next right
      declare a last node, assign it with node of curr.left
      while the last.right is not null
      assign the last with the most right
      once the last found, move the curr.right tree to the right of last
      move the curr.left to curr.right
      clear the curr.left
    curr move forward to the right
  return root
  */
  if (root === null) return [];

  let curr = root;
  while (curr !== null) {
    if (curr.left !== null) {
      let last = curr.left;
      while (last.right !== null) {
        last = last.right;
      }

      last.right = curr.right;
      curr.right = curr.left;
      curr.left = null;
    }
    curr = curr.right;
  }
  return root;
};
