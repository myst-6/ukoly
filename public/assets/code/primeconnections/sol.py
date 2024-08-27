# Solution Author: Adwaya Gupta
from collections import deque

l, start, end = map(int, input().split())

isPrime = [True] * (l+1)
isPrime[0] = isPrime[1] = False
for i in range(2, int(l**0.5)+1):
    if isPrime[i]:
        for j in range(i*i, l+1, i):
            isPrime[j] = False

q = deque([(start, 1)])
seen = set()
while q:
    curr, dist = q.popleft()

    if curr == end:
        print(dist)
        break
    if curr in seen:
        continue
    
    seen.add(curr)
    n = 1
    while 0 <= curr - n or curr + n <= l:            
        if curr + n <= l and isPrime[curr+n]:
            q.append((curr+n, dist+1))
        if 0 <= curr - n and isPrime[curr-n]:
            q.append((curr-n, dist+1))
        n *= 2
