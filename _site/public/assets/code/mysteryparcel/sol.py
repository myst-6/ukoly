# Solution Author: Adwaya Gupta
from functools import lru_cache

p, i, n, w = map(int, input().split())

@lru_cache(maxsize=None)
def combsWeight(n, items, maxI=i):
    if items == 0: 
        if n == 0: return 1
        return 0
    if n == 0: return 0
    
    ans = 0
    for j in range(1, maxI+1):
        if n - j >= 0:
            ans += combsWeight(n-j, items-1, j)
    return ans

@lru_cache(maxsize=None)
def combs(parcels, items):
    if parcels == 1:
        return combsWeight(w, items)
    
    ans = 0
    for j in range(1, n+1):
        if items - j >= 0:
            ans += combsWeight(w, j) * combs(parcels-1, items-j)
    return ans

print(combs(p, n))
