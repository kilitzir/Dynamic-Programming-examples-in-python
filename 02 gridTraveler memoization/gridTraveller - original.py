# Say that you are a traveller on a 2D grid.
# You begin in the top-left corner and your goal is to travel to the bottom-right corner.
# You may only move down or right

# In how many ways can you travel to the goal on a grid with dimensions m*n?
def gridTraveller(n,m):
    if (n == 0 and m == 0):
        return 0;
    if (n == 1 or m == 1):
        return 1;
    return gridTraveller(n-1,m)+ gridTraveller(n,m-1)


import time
start = time.time()
print (gridTraveller(13,16))
end = time.time()
print( start)
print (start)
print((end - start)*1000)