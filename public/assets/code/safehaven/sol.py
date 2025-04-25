# Solution Author: Adwaya Gupta
from collections import deque

n, red, green = map(int, input().split())
p = [red, green]

grid = [['E']*n for _ in range(n)]
grid[0][0] = 'R'
pos = 0
claimed = 1
turn = 1
while claimed < n*n:
    cnt = 0
    while cnt < p[turn]:
        pos = (pos + 1) % (n*n)
        r, c = pos // n, pos % n
        if grid[r][c] == 'E':
            cnt += 1            
    
    r, c = pos // n, pos % n
    grid[r][c] = 'RG'[turn]
    claimed += 1
    turn ^= 1
        
valid = lambda r, c: 0 <= r < n and 0 <= c < n
dirs = [0, 1, 0, -1, 0]

def getHavenScore(r, c, player, seen):
    q = deque([(r, c)])
    reds = greens = 0
    bestSq = r*n+c
    bestMove = (float('inf'), float('inf'))
    
    while q:
        r, c = q.popleft()
        
        if not valid(r, c) or (r, c) in seen or grid[r][c] == 'E':
            continue
        seen.add((r, c))
        
        # update haven scores
        if grid[r][c] == 'R': reds += 1
        else: greens += 1
        bestSq = max(bestSq, r*n+c)
        
        # update best move for this haven
        if grid[r][c] == player:
            for i in range(4):
                nr, nc = r + dirs[i], c + dirs[i + 1]
                if not valid(nr, nc) or grid[nr][nc] in {'E', player}: continue
                
                if r*n+c < bestMove[0]:
                    bestMove = (r*n+c, nr*n+nc)
                if r*n+c == bestMove[0] and nr*n+nc < bestMove[1]:
                    bestMove = (r*n+c, nr*n+nc)
        
        for i in range(4):
            q.append((r + dirs[i], c + dirs[i + 1]))
    
    if reds == 0 or greens == 0:
        return -1

    return (
        reds if player == 'G' else greens, 
        reds if player == 'R' else greens, 
        bestSq,
        bestMove
    )

turn = 0
while True:
    moves = []

    seen = set()
    for r in range(n):
        for c in range(n):
            out = getHavenScore(r, c, 'RG'[turn], seen)
            if out == -1:
                continue
            moves.append(out)

    if len(moves) == 0: break
    moves.sort(key=lambda x: (x[0], -x[1], -x[2]))
    
    move = moves[0][-1]
    grid[move[0]//n][move[0]%n] = 'E'
    grid[move[1]//n][move[1]%n] = 'RG'[turn]
    
    turn ^= 1   
                                
rOut = gOut = 0
for i in range(n):
    for j in range(n):
        if grid[i][j] == 'E': 
            continue
        elif grid[i][j] == 'R':
            rOut += 1
        else: 
            gOut += 1
        
        q = deque([(i, j)])
        while q:
            r, c = q.popleft()
            if not valid(r, c) or grid[r][c] == 'E': continue
            grid[r][c] = 'E'
            for k in range(4):
                q.append((r+dirs[k], c+dirs[k+1]))
                            
print(rOut, gOut)
