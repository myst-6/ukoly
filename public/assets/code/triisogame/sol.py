# Solution Author: Adwaya Gupta
class Edge:
    def __init__(self, *adj):
        self.adj = list(adj)
        
    def get(self, tri):
        self.adj.append(tri)
        return self

class InvertedTriangle:
    def __init__(self, left, top, right, value=None):
        self.left = left
        self.top = top
        self.right = right
        self.value = value
        
class Triangle:
    def __init__(self, left, right, bottom):
        self.left = left
        self.right = right
        self.bottom = bottom
        self.value = None
        
class Grid:
    def __init__(self):
        self.grid = []
        n = 500
        
        for r in range(n):
            self.grid.append([])
            for c in range(n):
                if r == 0:
                    if c == 0:
                        self.grid[-1].append(
                            InvertedTriangle(Edge((r, c)), Edge((r, c)), Edge((r, c))))
                    else:
                        if type(self.grid[0][-1]) == InvertedTriangle:
                            self.grid[-1].append(
                                Triangle(self.grid[0][-1].right.get((r, c)), Edge((r, c)), Edge((r,c))))
                        else:
                            self.grid[-1].append(
                                InvertedTriangle(self.grid[0][-1].right.get((r,c)), Edge((r,c)), Edge((r,c))))
                else:
                    if c == 0:
                        if type(self.grid[r-1][0]) == InvertedTriangle:
                            self.grid[-1].append(
                                Triangle(Edge((r,c)), Edge((r,c)), Edge((r,c))))
                        else:
                            self.grid[-1].append(
                                InvertedTriangle(self.grid[r-1][0].bottom.get((r,c)), Edge((r,c)), Edge((r,c))))
                    else:
                        if type(self.grid[-1][-1]) == InvertedTriangle:
                            self.grid[-1].append(
                                Triangle(self.grid[-1][-1].right.get((r,c)), Edge((r,c)), Edge((r,c))))
                        else:
                            self.grid[-1].append(
                                InvertedTriangle(
                                    self.grid[-1][-1].right.get((r,c)), 
                                    self.grid[r-1][c].bottom.get((r,c)), 
                                    Edge((r,c))))

        self.grid[n//2][n//2 - 1].value = 0
        self.leftmost = (n//2, n//2 - 1)

    def getNext(self, edge):
        full = lambda r, c: self.grid[r][c].value is not None
        r,c = edge.adj[0] if full(*edge.adj[0]) else edge.adj[1]
        filled = self.grid[r][c]
        if type(filled) == Triangle:
            if filled.left == edge:
                if full(r-1, c-1): return self.grid[r-1][c-1].bottom
                elif full(r-1, c): return self.grid[r-1][c].left
                elif full(r-1, c+1): return self.grid[r-1][c+1].left
                elif full(r, c+1): return self.grid[r][c+1].top
                return self.grid[r][c].right
            elif filled.right == edge:
                if full(r, c+2): return self.grid[r][c+2].left
                elif full(r+1, c+2): return self.grid[r+1][c+2].top
                elif full(r+1, c+1): return self.grid[r+1][c+1].right
                elif full(r+1, c): return self.grid[r+1][c].right
                return self.grid[r][c].bottom
            else:
                if full(r+1, c-1): return self.grid[r+1][c-1].right
                elif full(r+1, c-2): return self.grid[r+1][c-2].right
                elif full(r, c-2): return self.grid[r][c-2].bottom
                elif full(r, c-1): return self.grid[r][c-1].left
                return self.grid[r][c].left
        else:
            if filled.left == edge:
                if full(r, c-2): return self.grid[r][c-2].right
                elif full(r-1, c-2): return self.grid[r-1][c-2].bottom
                elif full(r-1, c-1): return self.grid[r-1][c-1].left
                elif full(r-1, c): return self.grid[r-1][c].left
                return self.grid[r][c].top
            elif filled.right == edge:
                if full(r+1, c+1): return self.grid[r+1][c+1].top 
                elif full(r+1, c): return self.grid[r+1][c].right
                elif full(r+1, c-1): return self.grid[r+1][c-1].right
                elif full(r, c-1): return self.grid[r][c-1].bottom
                return self.grid[r][c].left
            else:
                if full(r-1, c+1): return self.grid[r-1][c+1].left
                elif full(r-1, c+2): return self.grid[r-1][c+2].left
                elif full(r, c+2): return self.grid[r][c+2].top
                elif full(r, c+1): return self.grid[r][c+1].right
                return self.grid[r][c].right
            
    def pointsQuery(self, edge, player):
        r, c = edge.adj[0] if self.grid[edge.adj[0][0]][edge.adj[0][1]].value is None else edge.adj[1]
        ans = 0
        if type(self.grid[r][c]) == Triangle:
            if self.grid[r][c+2].value == self.grid[r-1][c+1].value == player: ans += 1
            if self.grid[r+1][c+1].value == self.grid[r+1][c-1].value == player: ans += 1
            if self.grid[r-1][c-1].value == self.grid[r][c-2].value == player: ans += 1
        else:
            if self.grid[r][c+2].value == self.grid[r+1][c+1].value == player: ans += 1
            if self.grid[r][c-2].value == self.grid[r+1][c-1].value == player: ans += 1
            if self.grid[r-1][c-1].value == self.grid[r-1][c+1].value == player: ans += 1
        return ans
    
grid = Grid()
r, c = grid.leftmost

p, m = map(int, input().split())
traversals = list(map(int, input().split()))
positions = [grid.grid[r][c].left]*p
playerScore = [0]*p

for move in range(m):
    player = move % p
    start = positions[player]
    
    if grid.grid[start.adj[0][0]][start.adj[0][1]].value is not None and \
       grid.grid[start.adj[1][0]][start.adj[1][1]].value is not None:
        positions[player] = grid.grid[grid.leftmost[0]][grid.leftmost[1]].left
        start = positions[player]

    curr = start
    for t in range(traversals[player]):
        curr = grid.getNext(curr)
        if grid.pointsQuery(curr, player + 1) > 0: break
    positions[player] = curr
    
    for r, c in start.adj:
        if grid.grid[r][c].value is None:
            playerScore[player] += grid.pointsQuery(start, player + 1)
            grid.grid[r][c].value = player + 1
            
            grid.leftmost = min((r,c), grid.leftmost)
            for i, pos in enumerate(positions):
                if grid.grid[pos.adj[0][0]][pos.adj[0][1]].value is not None and \
                    grid.grid[pos.adj[1][0]][pos.adj[1][1]].value is not None:
                    positions[i] = grid.grid[grid.leftmost[0]][grid.leftmost[1]].left
            break
        
for p in playerScore: print(p)

start = positions[0]
curr = grid.getNext(start)
perim = 1
while curr != start:
    perim += 1
    curr = grid.getNext(curr)
print(perim)
