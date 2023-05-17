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
