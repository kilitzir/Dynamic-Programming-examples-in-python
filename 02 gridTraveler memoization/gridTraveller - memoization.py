# Say that you are a traveller on a 2D grid.
# You begin in the top-left corner and your goal is to travel to the bottom-right corner.
# You may only move down or right

# In how many ways can you travel to the goal on a grid with dimensions m*n?
def gridTraveller(n,m,memo=None):
    if (memo is None):
        memo = {};    
    key = str(n)+","+str(m);
    if (key in memo):
        return memo[key];
    if (n == 0 and m == 0):
        return 0;
    if (n == 1 or m == 1):
        return 1;
    r = gridTraveller(n-1,m, memo)+ gridTraveller(n,m-1,memo)
    memo[key] = r
    return r


import time
start = time.time()
print ("**********")
print (gridTraveller(18,18))
end = time.time()
print( start)
print (start)
print((end - start)*1000)