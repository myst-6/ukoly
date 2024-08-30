class Board:
    def __init__(self):
        self.board = [
            ['S','S','S','S','S'],
            ['.','.','.','.','.'],
            ['.','.','*','.','.'],
            ['.','.','.','.','.'],
            ['F','F','F','F','F']
        ]
        self.fPos = [(4, 0), (4, 1), (4, 2), (4, 3), (4, 4)]
        self.sPos = [(0, 0), (0, 1), (0, 2), (0, 3), (0, 4)]
        self.neutronPos = (2, 2)
        self.direcs = [(-1, 0), (-1, 1), (0, 1), (1, 1), (1, 0), (1, -1), (0, -1), (-1, -1)]
        
    def winner(self):
        if self.neutronPos[0] == 0:
            return 's'
        elif self.neutronPos[0] == 4:
            return 'f'
        return None
        
    def slide(self, r, c, direc):
        dr, dc = direc
        while 0 <= r+dr < 5 and 0 <= c+dc < 5 and self.board[r+dr][c+dc] == '.':
            r += dr
            c += dc
        return r, c
        
    def getMovesNeutron(self, player):
        r, c = self.neutronPos
        dests = []
        for dr, dc in self.direcs:
            dest = self.slide(r, c, (dr, dc))
            if dest != (r, c):
                dests.append(dest)
            
        lose = None
        ans = []
        for dest in dests:
            if player == 0 and dest[0] == 4:
                return [dest]
            elif player == 0 and dest[0] == 0:
                if lose is None: lose = dest
            elif player == 1 and dest[0] == 0:
                return [dest]
            elif player == 1 and dest[0] == 4:
                if lose is None: lose = dest
            else:
                ans.append(dest)
                
        if len(ans) > 0: return ans
        elif lose is not None: return [lose]
        else: return []
        
    def getMoves(self, player, piece):
        if player == 0:
            r, c = self.fPos[piece]
        else:
            r, c = self.sPos[piece]
            
        dests = []
        for dr, dc in self.direcs:
            dest = self.slide(r, c, (dr, dc))
            if dest != (r, c):
                dests.append(dest)
        return dests
    
    def updatePiecePos(self, player, piece, dest):
        if player == 0:
            r, c = self.fPos[piece]
            nr, nc = dest
            self.board[r][c] = '.'
            self.board[nr][nc] = 'F'
            self.fPos[piece] = dest
        else:
            r, c = self.sPos[piece]
            nr, nc = dest
            self.board[r][c] = '.'
            self.board[nr][nc] = 'S'
            self.sPos[piece] = dest
            
    def updateNeutronPos(self, dest):
        r, c = self.neutronPos
        nr, nc = dest
        self.board[r][c] = '.'
        self.board[nr][nc] = '*'
        self.neutronPos = dest
        
    def __str__(self):
        return '\n'.join([''.join(row) for row in self.board])
    
p1 = list(map(lambda x: int(x)-1, input().split()))
p2 = list(map(lambda x: int(x)-1, input().split()))
board = Board()

turn = 0
while board.winner() is None:
    neutronMoves = board.getMovesNeutron(turn%2)
    p = p1[turn//2 % 5] if turn%2 == 0 else p2[turn//2 % 5]
    
    r, c = board.neutronPos
    for nr, nc in neutronMoves:
        board.updateNeutronPos((nr, nc))

        if board.winner() is not None: 
            break
        
        pMoves = board.getMoves(turn%2, p)
        if len(pMoves) == 0: 
            board.updateNeutronPos((r, c))
            continue
        
        board.updatePiecePos(turn%2, p, pMoves[0])
        break
    else: break
    
    if turn // 2 == 0:
        print(board, end='\n\n')
    turn += 1
print(board)
