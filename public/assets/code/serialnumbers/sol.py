# Solution Author: Adwaya Gupta
from collections import deque

def between(a, b, *c):
    for i in c:
        if min(a,b) < i < max(a,b):
            return True
    return False

def getNext(s):
    ans = []
    for i in range(len(s)-1):
        adj = []
        if i > 0: adj.append(s[i-1])
        if i < len(s)-2: adj.append(s[i+2])
            
        if not between(s[i], s[i+1], *adj): continue
        ans.append(s[:i] + s[i+1] + s[i] + s[i+2:])
    return ans

n = int(input())
s = input()

seen = set()
ans = 0
q = deque([(s, 0)])
while q:
    curr, d = q.popleft()
    if curr in seen: continue
    
    seen.add(curr)
    ans = max(ans, d)
    
    for i in getNext(curr):
        if i not in seen:
            q.append((i, d+1))
print(ans)