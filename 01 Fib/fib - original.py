def fib(n):
    if n <= 2:
        return 1
    return  fib(n - 1) + fib(n - 2)

import time
start = time.time()
print (fib(40))
end = time.time()
print( start)
print (start)
print((end - start)*1000)
