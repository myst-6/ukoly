# Solution Author: Adwaya Gupta
from collections import defaultdict

trail = defaultdict(lambda: -float('inf'))
t, moves, n = input().split()
t, n = int(t), int(n)

d = [(0, 1), (1, 0), (0, -1), (-1, 0)]
x = y = direc = 0

for i in range(n):
    if moves[i%len(moves)] == 'R':
        direc = (direc + 1) % 4
    elif moves[i%len(moves)] == 'L':
        direc = (direc - 1) % 4
        
    cnt = 0
    while i - trail[(x+d[direc][0], y+d[direc][1])] < t and cnt < 4:
        direc = (direc + 1) % 4
        cnt += 1
    
    if i - trail[(x+d[direc][0], y+d[direc][1])] < t: break
    
    trail[(x, y)] = i
    x += d[direc][0]
    y += d[direc][1]
    
print(x, y)
