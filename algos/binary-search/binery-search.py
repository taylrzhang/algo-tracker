'''
 Binary Search
 Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

 You must write an algorithm with O(log n) runtime complexity.
'''


def search(nums, target):
    min = 0
    max = len(nums) - 1

    while min <= max:
        # mid = (min + max) // 2
        mid = min + ((max - min) // 2)
        if nums[mid] < target:
            min = mid + 1
        elif nums[mid] > target:
            max = mid - 1
        else:
            return mid

    return -1
