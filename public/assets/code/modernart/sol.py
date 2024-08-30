# Solution Author: Adwaya Gupta
from functools import lru_cache

@lru_cache(None)
def wayswithLength(length, a, b, c, d):
    if a < 0 or b < 0 or c < 0 or d < 0: 
        return 0
    if length == 1:
        return (a>0) + (b>0) + (c>0) + (d>0)
    
    return wayswithLength(length-1, a - 1, b, c, d) + \
           wayswithLength(length-1, a, b - 1, c, d) + \
           wayswithLength(length-1, a, b, c - 1, d) + \
           wayswithLength(length-1, a, b, c, d - 1)

def find(a, b, c, d):
    global ways
    if a + b + c + d == 1:
        if a: return 'a'
        if b: return 'b'
        if c: return 'c'
        if d: return 'd'
    
    if ways + wayswithLength(a+b+c+d-1, a-1, b, c, d) >= n and a:
        return 'a' + find(a - 1, b, c, d)
    
    ways += wayswithLength(a+b+c+d-1, a-1, b, c, d)
    
    if ways + wayswithLength(a+b+c+d-1, a, b-1, c, d) >= n and b:
        return 'b' + find(a, b - 1, c, d)
    
    ways += wayswithLength(a+b+c+d-1, a, b-1, c, d)
    
    if ways + wayswithLength(a+b+c+d-1, a, b, c-1, d) >= n and c:
        return 'c' + find(a, b, c - 1, d)
    
    ways += wayswithLength(a+b+c+d-1, a, b, c-1, d)
    
    return 'd' + find(a, b, c, d - 1)

a, b, c, d, n = map(int, input().split())
ways = 0
print(find(a, b, c, d).upper())
