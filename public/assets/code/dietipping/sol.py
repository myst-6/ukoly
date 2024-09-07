# Solution Author: Adwaya Gupta
class Die:
    def __init__(self):
        self.x = 5
        self.y = 5
        
        self.top = 1
        self.bottom = 6
        self.up = 2
        self.down = 5
        self.left = 3
        self.right = 4
        
        self.heading = [self.forward, self.rightward, self.backward, self.leftward]
        
    def forward(self):
        self.top, self.down, self.bottom, self.up = self.down, self.bottom, self.up, self.top
        die.y -= 1
        die.y %= 11
        
    def backward(self):
        self.top, self.down, self.bottom, self.up = self.up, self.top, self.down, self.bottom
        die.y += 1
        die.y %= 11
        
    def leftward(self):
        self.top, self.left, self.bottom, self.right = self.right, self.top, self.left, self.bottom
        die.x -= 1
        die.x %= 11
        
    def rightward(self):
        self.top, self.left, self.bottom, self.right = self.left, self.bottom, self.right, self.top
        die.x += 1
        die.x %= 11
        
    def __str__(self):
        ans = ''
        for i in range(self.y-1, self.y + 2):
            for j in range(self.x-1, self.x + 2):
                if not (0 <= i < 11 and 0 <= j < 11):
                    ans += 'x'
                else: 
                    ans += str(board[i][j])
            ans += '\n'
        return ans
            
board = [[1] * 11 for _ in range(11)]
board[4][4:7], board[5][4:7], board[6][4:7] = [list(map(int, input().split())) for _ in range(3)]

die = Die()
rotate = lambda: die.heading.append(die.heading.pop(0))

n = int(input())
while n != 0:
    if not n.is_integer():
        n = int(input())
        continue
    
    for _ in range(n):
        r, c = die.y, die.x
        board[r][c] = (board[r][c] + die.top - 1) % 6 + 1
        if board[r][c] == 2:
            rotate()
        elif board[r][c] == 3 or board[r][c] == 4:
            rotate()
            rotate()
        elif board[r][c] == 5:
            rotate()
            rotate()
            rotate()
        die.heading[0]()
            
    print(die)
    n = int(input())
