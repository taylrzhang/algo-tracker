'''
The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.
'''


def diameterOfBinaryTree(root) -> int:
    d = [0]

    def dfs(root):
        if not root:
            return -1
        left = dfs(root.left)
        right = dfs(root.right)
        # reassign the diameter
        d[0] = max(d[0], left + right + 2)
        # return biggest height of each node
        return max(left, right) + 1

    dfs(root)
    return d[0]
