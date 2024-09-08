# Solution Author: Adwaya Gupta
from functools import lru_cache

@lru_cache(maxsize=None)
def combs(tot):
    if tot < 0: return 0
    if tot == 0: return 1
    return sum(combs(tot - i) for i in range(1, 10))

def solve(tot):
    global ways
    if tot == 0: return ''
    
    i = 1
    while ways < n and i <= max(9, tot):
        ways += combs(tot - i)
        i += 1
    i -= 1
    ways -= combs(tot - i)
    return str(i) + solve(tot - i)
    
s, n = map(int, input().split())
ways = 0
print(' '.join(solve(s)))
