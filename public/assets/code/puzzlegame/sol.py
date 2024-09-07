# Solution Author: Adwaya Gupta
class Board:
    def __init__(self, board):
        self.board = [[board[j][i] for j in range(4)][::-1] for i in range(4)]
        self.next = [row[:] for row in self.board]
        
    def getBlock(self, r, c, col):
        if (not (0 <= r < 4 and 0 <= c < 4)) or (r,c) in self.seen:
            return 0
        if self.board[r][c] != col:
            return 0
        
        self.seen.add((r,c))
        return 1 + self.getBlock(r+1, c, col) + \
                   self.getBlock(r-1, c, col) + \
                   self.getBlock(r, c+1, col) + \
                   self.getBlock(r, c-1, col)
                   
    def doRound(self):
        self.seen = set()

        score = 1
        for r in range(4):
            for c in range(4):
                x = self.getBlock(r, c, self.board[r][c])
                if x > 1: 
                    score *= x
                    self.padBlock(r, c, self.board[r][c])

        self.deleteBlocks(r, c, self.board[r][c])
        return score if score > 1 else 0
    
    def padBlock(self, r, c, col):
        if not (0 <= r < 4 and 0 <= c < 4) or (self.board[r][c] != col):
            return
        
        self.board[r][c] = '.'
        
        self.padBlock(r+1, c, col)
        self.padBlock(r-1, c, col)
        self.padBlock(r, c+1, col)
        self.padBlock(r, c-1, col)
        
    def deleteBlocks(self, r, c, col):
        for r in range(4):
            for c in range(4):
                if self.board[r][c] == '.':
                    self.board[r].append(self.next[r][0])
                    self.next[r].append(self.next[r].pop(0))
        for r in range(4):
            while '.' in self.board[r]:
                self.board[r].remove('.')
        
    def __str__(self):
        tmp = [[self.board[j][i] for j in range(4)] for i in range(4)][::-1]
        return '\n'.join(''.join(row) for row in tmp)
        
    
board = [list(input()) for _ in range(4)]
b = Board(board)

n = int(input())
score = 0
while n != 0:
    for _ in range(n):
        s = b.doRound()
        if s == 0:
            print(score)
            print("GAME OVER")
            quit()
            
        score += s
        
    print(b)
    print(score)
        
    n = int(input())
