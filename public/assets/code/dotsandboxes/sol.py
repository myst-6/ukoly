# Solution Author: Adwaya Gupta
class Board:
    def __init__(self):
        self.board = [[-1]*5 for _ in range(5)]
        self.horiz = [[False]*5 for _ in range(6)]
        self.vert = [[False]*6 for _ in range(5)]
        
        self.scores = [0, 0]
        
    def addEdge(self, dot1, dot2, player):
        # add edge between dot1 and dot2, given their r and c
        if dot1[0] == dot2[0]:
            self.horiz[dot1[0]][min(dot1[1], dot2[1])] = True 
        else:
            self.vert[min(dot1[0], dot2[0])][dot1[1]] = True    
            
        return self.updateSquares(player)
    
    def queryEdge(self, dot1, dot2):
        # check if edge has been added between dot1 and dot2
        if dot1[0] == dot2[0]:
            return self.horiz[dot1[0]][min(dot1[1], dot2[1])]
        else:
            return self.vert[min(dot1[0], dot2[0])][dot1[1]]
        
    def updateSquares(self, player):
        # update board for completed squares
        extra = False
        for r in range(5):
            for c in range(5):
                if self.board[r][c] != -1: continue
                if self.horiz[r][c] and self.horiz[r+1][c] and self.vert[r][c] and self.vert[r][c+1]:
                    self.board[r][c] = player
                    self.scores[player] += 1
                    extra = True
        return extra
                    
    def __str__(self):
        # convert board to string
        out = ""
        for r in range(5):
            for c in range(5):
                if self.board[r][c] == -1:
                    out += "*"
                elif self.board[r][c] == 0:
                    out += "X"
                else:
                    out += "O"
                out += ' '
            out += "\n"
        return out


board = Board()

p1, m1, p2, m2, t = map(int, input().split())

getRC = lambda x: (x//6, x%6)
valid = lambda r, c: 0 <= r <= 5 and 0 <= c <= 5

players = [p1-1, p2-1]
mods = [m1, m2]
dirs = [
    [(-1, 0), (0, 1), (1, 0), (0, -1)], 
    [(-1, 0), (-0, -1), (1, 0), (0, 1)]
]

turn = 0
player = False

while turn < t:
    turn += 1
    players[player] = (players[player] + mods[player]) % 36
    
    done = False
    while not done:
        r, c = getRC(players[player])
        for dr, dc in dirs[player]:
            nr, nc = r+dr, c+dc
            if not valid(nr, nc): continue
            if board.queryEdge((r, c), (nr, nc)): continue
            
            if not board.addEdge((r, c), (nr, nc), player):
                player = not player
            done = True
            break
        
        if not done: 
            players[player] = (players[player] + 1) % 36
                                    
print(board)
print(*board.scores)
