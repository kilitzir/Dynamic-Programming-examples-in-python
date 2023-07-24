# Write a function 'cansum(targetSum,numbers)' that takes in a target sum and an array of numbers 
# as arguments
#The function should return a boolean indicating whether or not it is possible to generate the target sum
# using numbers from the array.
# You may use an element of the array as many times as needed
# You may assume that all numbers are nonnegative

# Write a function 'cansum(targetSum,numbers)' that takes in a target sum and an array of numbers 
# as arguments
#The function should return a boolean indicating whether or not it is possible to generate the target sum
# using numbers from the array.
# You may use an element of the array as many times as needed
# You may assume that all numbers are nonnegative

import sys
import time

def can_sum(target_sum, numbers, memo=None):
    if memo is None:
        memo = {}
    if target_sum in memo:
        return memo[target_sum]
    if target_sum == 0:
        return True
    if target_sum < 0:
        return False
    for num in numbers:
        remainder = target_sum - num
        if can_sum(remainder, numbers, memo) == True:
            memo[remainder] = True
            return True
    memo[target_sum] = False
    return False

sys.setrecursionlimit(10000)
start = time.time()

print(can_sum(10000, [7,14]))

end = time.time()

print(f"Execution time: {end - start} seconds")

start = time.time()

# You didn't include any operation here in your original JavaScript code

end = time.time()

print(f"Execution time: {end - start} seconds")
