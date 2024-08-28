class Board:
    def __init__(self):
        self.board = [[False]*10 for _ in range(10)]
    
    def valid(self, x, y):
        if x < 0 or x >= 10 or y < 0 or y >= 10:
            return False
        return True
    
    def queryPos(self, x, y, length, direc):
        if direc == 'h':
            for x in range(x, x+length):
                if not self.valid(x, y) or self.board[y][x]:
                    return False
                
                for dx, dy in [(0, 1), (1, 0), (0, -1), (-1, 0), (1, 1), (-1, 1), (1, -1), (-1, -1)]:
                    if self.valid(x+dx, y+dy) and self.board[y+dy][x+dx]:
                        return False
                
            return True
        else:
            for y in range(y, y+length):
                if not self.valid(x, y) or self.board[y][x]:
                    return False
                
                for dx, dy in [(0, 1), (1, 0), (0, -1), (-1, 0), (1, 1), (-1, 1), (1, -1), (-1, -1)]:
                    if self.valid(x+dx, y+dy) and self.board[y+dy][x+dx]:
                        return False
                
            return True
            
    def addShip(self, x, y, length, direc):
        if self.queryPos(x, y, length, direc):
            if direc == 'h':
                for x in range(x, x+length):
                    self.board[y][x] = True
            else:
                for y in range(y, y+length):
                    self.board[y][x] = True
            return True
        return False
     
a, c, m = map(int, input().split())
r = 0
ships = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1]
       
board = Board()
for length in ships:
    placed = False
    while not placed:
        r = (a*r+c)%m
        x = r%10
        y = (r//10)%10
        
        r = (a*r+c)%m
        direc = 'h' if r%2 == 0 else 'v'
        
        placed = board.addShip(x, y, length, direc)
    print(x, y, direc.upper())
