/** 100. Same Tree
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

const isSameTree = (p, q) => {
  if (p === null && q === null) return true;
  if ((p && !q) || (q && !p)) return false;
  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
