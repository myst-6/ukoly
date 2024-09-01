from functools import lru_cache
alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

@lru_cache(maxsize=None)
def toInd(x):
    return alpha.index(x)

def toChr(x):
    return alpha[x]

@lru_cache(maxsize=None)
def combs(l, smallest='A'):
    if l == 1: return 36 - toInd(smallest)
    
    ans = 0
    for i in range(toInd(smallest)+1, 36):
        ans += combs(l - 1, toChr(i))
    return ans

def solve(length, smallest='A'):
    global ways
    if length == 1: return alpha[toInd(smallest) + n - ways - 1]
    
    for i in range(toInd(smallest), 36):
        if ways + combs(length, toChr(i)) - combs(length, toChr(i+1)) >= n:
            return toChr(i) + solve(length - 1, toChr(i+1))
        ways += combs(length, toChr(i)) - combs(length, toChr(i+1))
        
n = int(input())

length = 0
ways = 0

while ways < n:
    length += 1
    ways += combs(length)
ways -= combs(length)
print(solve(length))
