class Board:
    def __init__(self, n):
        self.board = [list(map(int, input().split())) for _ in range(n)]
        
        self.upConnectSolid = [1, 5, 6]
        self.downConnectSolid = [1, 3, 4]
        self.leftConnectSolid = [2, 4, 5]
        self.rightConnectSolid = [2, 3, 6]
        
        self.upConnectDash = [2, 3, 4]
        self.downConnectDash = [2, 5, 6]
        self.leftConnectDash = [1, 3, 6]
        self.rightConnectDash = [1, 4, 5]
        
    def getConnect(self, currType, currAdj, direc, solid):
        if solid:
            if direc == "up":
                return currType in self.downConnectSolid and currAdj in self.upConnectSolid
            elif direc == "down":
                return currType in self.upConnectSolid and currAdj in self.downConnectSolid
            elif direc == "left":
                return currType in self.rightConnectSolid and currAdj in self.leftConnectSolid
            elif direc == "right":
                return currType in self.leftConnectSolid and currAdj in self.rightConnectSolid
        else:
            if direc == "up":
                return currType in self.downConnectDash and currAdj in self.upConnectDash
            elif direc == "down":
                return currType in self.upConnectDash and currAdj in self.downConnectDash
            elif direc == "left":
                return currType in self.rightConnectDash and currAdj in self.leftConnectDash
            elif direc == "right":
                return currType in self.leftConnectDash and currAdj in self.rightConnectDash
                
    def getAdj(self, r, c, solid):
        ans = []
        if r > 0 and self.getConnect(self.board[r][c], self.board[r-1][c], "up", solid):
            ans.append((r-1, c))
        if r < len(self.board)-1 and self.getConnect(self.board[r][c], self.board[r+1][c], "down", solid):
            ans.append((r+1, c))
        if c > 0 and self.getConnect(self.board[r][c], self.board[r][c-1], "left", solid):
            ans.append((r, c-1))
        if c < len(self.board[0])-1 and self.getConnect(self.board[r][c], self.board[r][c+1], "right", solid):
            ans.append((r, c+1))
        return ans
    
    def getLoop(self, r, c, visited, solid):
        start = (r, c)
        visited.add(start)
        
        adj = self.getAdj(r, c, solid)
        if adj == []: return 0
        
        last = start
        curr = adj[0]
        ans = 1
        visited.add(curr)
        
        while curr != start:
            adj = self.getAdj(curr[0], curr[1], solid)
            if len(adj) == 1:
                return 0
            
            if last == adj[0]:
                last = curr
                curr = adj[1]
            else:
                last = curr
                curr = adj[0]

            visited.add(curr)
            ans += 1
            
        return ans

n = int(input())
b = Board(n)

p1 = p2 = 0
p1visit = set()
p2visit = set()

for r in range(n):
    for c in range(n):
        if (r, c) not in p1visit:
            p1 += b.getLoop(r, c, p1visit, True)
        if (r, c) not in p2visit:
            p2 += b.getLoop(r, c, p2visit, False)
print(p1, p2)
