# BFS

def invertTree(root):
    queue = [root]
    if not root:
        return root

    while queue:
        node = queue.pop(0)
        if node:
            node.left, node.right = node.right, node.left
            queue.append(node.left)
            queue.append(node.right)

    return root


# Recurive
def invertTree(root):
    if not root:
        return None

    root.left, root.right = invertTree(
        root.right), invertTree(root.left)

    return root
