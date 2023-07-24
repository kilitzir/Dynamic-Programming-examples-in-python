def fib(n, memo=None):
    if memo is None:
        memo = {}
    if n in memo:
        print(f"found {n}")
        return memo[n]
    if n <= 2:
        return 1
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
    return memo[n]

import time
start = time.time()
print (fib(40))
end = time.time()
print( start)
print (start)
print((end - start)*1000)