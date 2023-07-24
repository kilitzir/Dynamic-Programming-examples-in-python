# Write a function 'cansum(targetSum,numbers)' that takes in a target sum and an array of numbers 
# as arguments
#The function should return a boolean indicating whether or not it is possible to generate the target sum
# using numbers from the array.
# You may use an element of the array as many times as needed
# You may assume that all numbers are nonnegative

import time

def can_sum(target_sum, numbers):
    if target_sum == 0:
        return True
    if target_sum < 0:
        return False
    for num in numbers:
        remainder = target_sum - num
        if can_sum(remainder, numbers) == True:
            return True
    return False

def can_sum1(target_sum, numbers, toSort=False):
    if target_sum == 0:
        return True
    if target_sum < 0:
        return False
    if not toSort:
        numbers = sorted(numbers)
        print(numbers)
    if target_sum < numbers[0]:
        return False
    for num in numbers:
        remainder = target_sum - num
        if can_sum1(remainder, numbers, True) == True:
            return True
    return False

start = time.time()
#print(can_sum(300, [7,14]))
end = time.time()
print(f"Execution time: {end - start} seconds")

start = time.time()
print(can_sum1(300, [14,7]))
end = time.time()
print(f"Execution time: {end - start} seconds")
