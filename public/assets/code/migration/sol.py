# Solution Author: Adwaya Gupta
class Board:
    def __init__(self):
        self.board = [[0 for _ in range(5005)] for _ in range(5005)]
    
    def add(self, x):
        r, c = x // 5, x % 5
        self.board[2500 + r][2500 + c] += 1
        self.update(2500+r, 2500+c)
    
    def update(self, r, c):
        if self.board[r][c] == 4:
            self.board[r][c] = 0

            for dr, dc in [(0, 1), (0, -1), (1, 0), (-1, 0)]:
                self.board[r+dr][c+dc] += 1
                self.update(r+dr, c+dc)
    
    def __str__(self):
        ans = ""
        for r in range(5):
            for c in range(5):
                ans += str(self.board[2500+r][2500+c]) + " "
            ans += "\n"
        return ans[:-1]

p, s, n = map(int, input().split())
moves = list(map(int, input().split()))
board = Board()

p -= 1

done = 0
while done < n:
    board.add(p)
    p = (p + moves[done%len(moves)]) % 25
    done += 1
print(board)
