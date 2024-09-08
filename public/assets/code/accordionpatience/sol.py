# Solution Author: Adwaya Gupta
class Game:
    def __init__(self, nums):
        self.cards = []
        for s in 'CHSD':
            for num in 'A23456789TJQK':
                self.cards.append((num + s, 1))
        self.shuffle(nums.copy())
        
    def shuffle(self, nums):
        out = []
        i = 0
        cnt = 0
        while self.cards:
            if cnt == nums[i]:
                out.append(self.cards.pop(0))
                i = (i + 1) % 6
                cnt = 0
            else:
                cnt += 1
                self.cards.append(self.cards.pop(0))
        self.cards = out
            
    def getMoves(self):
        out = []
        for i in range(len(self.cards)):
            if i-1 >= 0 and (self.cards[i-1][0][0] == self.cards[i][0][0] or self.cards[i-1][0][1] == self.cards[i][0][1]):
                out.append((i, i-1))
            if i-3 >= 0 and (self.cards[i-3][0][0] == self.cards[i][0][0] or self.cards[i-3][0][1] == self.cards[i][0][1]):
                out.append((i, i-3))
        return out
    
    def doMove(self, move):
        top, size = self.cards.pop(move[0])
        self.cards[move[1]] = (top, size+self.cards[move[1]][1])
        
    def strat1(self):
        moves = self.getMoves()
        moves.sort()
        self.doMove(moves[-1])
        
    def strat2(self):
        moves = self.getMoves()
        moves.sort(key=lambda x: (self.cards[x[0]][1] + self.cards[x[1]][1], x[0], x[1]))
        self.doMove(moves[-1])
        
    def strat3(self):
        valid = []
        moves = self.getMoves()
        mx = -1
        
        for i in moves:
            bef = self.cards.copy()
            self.doMove(i)
            nxtmoves = len(self.getMoves())
            if nxtmoves > mx:
                mx = nxtmoves
                valid = [i]
            elif nxtmoves == mx:
                valid.append(i)
            self.cards = bef
            
        valid.sort()
        self.doMove(valid[-1])
        
   
nums = list(map(int, input().split()))
for i in range(6): nums[i] -= 1

g = Game(nums)
print(g.cards[0][0], g.cards[-1][0])

for strat in range(3):
    g = Game(nums)
    while g.getMoves() and len(g.cards) > 1:
        [g.strat1, g.strat2, g.strat3][strat]()
    print(len(g.cards), g.cards[0][0])
