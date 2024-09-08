# Solution Author: Adwaya Gupta
from functools import lru_cache

@lru_cache(maxsize=None)
def combs(ones, length):
    if length < 0: return 0
    if length == 0: 
        return ones == 0
    return combs(ones, length-1) + combs(ones-1, length-1)

def solve(ones, length):
    global ways
    if ones == 0: return '0'*length
    if length == 1:
        if ones == 0: return '0'
        return '1'
    
    if ways + combs(ones, length-1) < n:
        ways += combs(ones, length-1)
        return '1' + solve(ones-1, length-1)
    return '0' + solve(ones, length-1)

n, m = map(int, input().split())
if m == 0:
    print('0')
    quit()

length = 0
ways = 0
while ways + combs(m-1, length-1) < n:
    ways += combs(m-1, length-1)
    length += 1

i = 0
ans = '1' + solve(m-1, length-1)
while i < length:
    print(ans[i*6:i*6+6], end=' ')
    i += 1
print()
    
