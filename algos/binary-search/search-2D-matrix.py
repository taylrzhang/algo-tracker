'''
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.
'''


def searchMatrix(matrix, target):

    min = 0
    max = len(matrix) - 1

    while min <= max:
        mid = min + ((max - min) // 2)
        if matrix[mid][0] > target:
            max = mid - 1
        elif matrix[mid][-1] < target:
            min = mid + 1
        else:
            break

    if not min <= max:
        return False

    l, r = 0, len(matrix[0]) - 1
    while l <= r:
        m = l + ((r - l) // 2)
        if matrix[mid][m] < target:
            l = m + 1
        elif matrix[mid][m] > target:
            r = m - 1
        elif matrix[mid][m] == target:
            return True

    return False


print(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 16))
