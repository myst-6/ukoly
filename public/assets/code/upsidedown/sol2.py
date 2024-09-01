from functools import lru_cache

@lru_cache(None)
def combs(length):
    return 9**(length//2)

def solve(length):
    global ways
    if length == 0: return ''
    if length == 1: return '5'

    for i in range(1,10):
        if ways + combs(length-2) >= n:
            return str(i) + solve(length-2) + str(10-i)
        ways += combs(length - 2)

n = int(input())
ways = 0
l = 0
while ways < n:
    l += 1
    ways += combs(l)
ways -= combs(l)
print(solve(l))
