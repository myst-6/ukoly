# Solution Author: Adwaya Gupta
class Hexagon:
    def __init__(self):
        self.edges = [None]*7

class Board:
    def __init__(self):
        self.board = [[Hexagon() for _ in range(5)] for _ in range(5)]
        self.reflects = [None, 4, 5, 6, 1, 2, 3]
        self.offsetsOdd = [None, (-1, 1), (0, 1), (1, 1), (1, 0), (0, -1), (-1, 0)]
        self.offsetsEven = [None, (-1, 0), (0, 1), (1, 0), (1, -1), (0, -1), (-1, -1)]
        self.valid = lambda r, c: 0 <= r < 5 and 0 <= c < 5
        
    def claim(self, r, c, edge, player): 
        self.board[r][c].edges[edge] = player        
        
        if r%2:
            adjr, adjc = r+self.offsetsOdd[edge][0], c+self.offsetsOdd[edge][1]
        else:
            adjr, adjc = r+self.offsetsEven[edge][0], c+self.offsetsEven[edge][1]
            
        if self.valid(adjr, adjc):
            self.board[adjr][adjc].edges[self.reflects[edge]] = player
        
            
    def queryHex(self, r, c):
        rcnt = bcnt = 0
        for edge in self.board[r][c].edges:
            if edge == 'r':
                rcnt += 1
            elif edge == 'b':
                bcnt += 1
        if rcnt > bcnt:
            return 'r'
        elif bcnt > rcnt:
            return 'b'
        else:
            return None
        
    def queryBoard(self):
        ans = [0, 0]
        for i in range(5):
            for j in range(5):
                hexagon = self.queryHex(i, j)
                if hexagon == 'r':
                    ans[0] += 1
                elif hexagon == 'b':
                    ans[1] += 1
        return ans
        
    def prefer(self, r, c, direc, player):
        if self.board[r][c].edges[direc] is not None:
            return (-float('inf'), -float('inf'), -float('inf'), -float('inf'), -float('inf'))
        initial = self.queryBoard()
        self.claim(r, c, direc, player)
        final = self.queryBoard()
        self.claim(r, c, direc, None)
        
        final = [final[0] - initial[0], final[1] - initial[1]] 
        if player == 'b': 
            final.reverse()
        else:
            r = -r
            c = -c
            direc *= -1
    
        return (final[0], -final[1], r, c, direc)
            
            
board = Board()
r, b = map(int, input().split())
s, f = map(int, input().split())

red = 0
reddirec = 0
blue = 24
bluedirec = 5

toRC = lambda x: (x//5, x%5)

for _ in range(s):
    board.claim(*toRC(red), reddirec+1, 'r')
    red = (red + r) % 25    
    reddirec = (reddirec + 1) % 6
    
    board.claim(*toRC(blue), bluedirec + 1, 'b')
    blue = (blue + b) % 25
    bluedirec = (bluedirec - 1) % 6
    
for _ in range(f):
    best = (-float('inf'), -float('inf'), -float('inf'), -float('inf'), -float('inf'))
    for r in range(5):
        for c in range(5):
            for direc in range(1,7):
                best = max(best, board.prefer(r, c, direc, 'r'))
    board.claim(abs(best[2]), abs(best[3]), abs(best[4]), 'r')
    
    best = (-float('inf'), -float('inf'), -float('inf'), -float('inf'), -float('inf'))
    for r in range(5):
        for c in range(5):
            for direc in range(1,7):
                best = max(best, board.prefer(r, c, direc, 'b'))
    board.claim(abs(best[2]), abs(best[3]), abs(best[4]), 'b')
        
print(*board.queryBoard(), sep='\n')
