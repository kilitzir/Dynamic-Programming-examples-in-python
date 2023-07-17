# Write a function 'howSum(targetSum,numbers) that take in a target sum and an array as arguments
# The function should return an array containing any combination of elements that 
# add up to exactly the target su, If there is no combination that adds up to the
# targetSum, then return null
# If there multiple combinations possible, you may return any single one

def howSumOriginal(targetSum, numbers):
    if targetSum == 0:
        return []
    if targetSum < 0:
        return None

    for num in numbers:
        remainder = targetSum - num
        r = howSumOriginal(remainder, numbers)
        if r is not None:
            return [num] + r
    return None

def howSumOriginal1(targetSum, numbers, sorted=False):
    if targetSum == 0:
        return []
    if targetSum < 0:
        return None

    if not sorted:
        numbers.sort()
        print(numbers)

    if targetSum < numbers[0]:
        return None

    for num in numbers:
        remainder = targetSum - num
        r = howSumOriginal1(remainder, numbers, True)
        if r is not None:
            return [num] + r

    return None
import time
start = time.time()
rr = 250
print(howSumOriginal(rr, [7, 14]))

end = time.time()
print(f"Execution time: {end - start} sec")
start = time.time()
print(howSumOriginal1(rr, [7, 14]))

end = time.time()
print(f"Execution time: {end - start} sec")

