# Solution Author: Adwaya Gupta
from functools import lru_cache

@lru_cache(None)
def wayswithLength(a, b, c, d):
    if a < 0 or b < 0 or c < 0 or d < 0: return 0
    if a+b+c+d == 1: return (a>0) + (b>0) + (c>0) + (d>0)
    
    return wayswithLength(a - 1, b, c, d) + \
           wayswithLength(a, b - 1, c, d) + \
           wayswithLength(a, b, c - 1, d) + \
           wayswithLength(a, b, c, d - 1)

def find(cnts):
    global ways
    if sum(cnts) == 1: return 'ABCD'[cnts.index(1)]
    
    for char in range(4):
        cnts[char] -= 1
        if ways + wayswithLength(*cnts) >= n:
            return 'ABCD'[char] + find(cnts)       
        ways += wayswithLength(*cnts)
        cnts[char] += 1

*cnts, n = map(int, input().split())
ways = 0
print(find(cnts))
