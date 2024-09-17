# Solution author: Alex Pylypenko

class Board:
    def __init__(self, board, current_turn):
        self.board = board
        self.current_turn = current_turn

    def get_winner(self):
        for i in range(len(self.board)-3):
            for j in range(len(self.board[0])):
                if self.board[i][j] == self.board[i+1][j] == self.board[i+2][j] == self.board[i+3][j] != 0:
                    return self.board[i][j]

        for i in range(len(self.board)):
            for j in range(len(self.board[0])-3):
                if self.board[i][j] == self.board[i][j+1] == self.board[i][j+2] == self.board[i][j+3] != 0:
                    return self.board[i][j]

        for i in range(len(self.board)-3):
            for j in range(len(self.board[0])-3):
                if self.board[i][j] == self.board[i+1][j+1] == self.board[i+2][j+2] == self.board[i+3][j+3] != 0:
                    return self.board[i][j]

        for i in range(len(self.board)-3):
            for j in range(3, len(self.board[0])):
                if self.board[i][j] == self.board[i+1][j-1] == self.board[i+2][j-2] == self.board[i+3][j-3] != 0:
                    return self.board[i][j]

        return 0

    def play_move(self, move):
        b2 = [list(row) for row in self.board]
        for i in range(len(b2[0])):
            if b2[move][i] == 0:
                b2[move][i] = self.current_turn
                break

        return Board(b2, 3 - self.current_turn)

    def simulate_one(self):
        for i in range(len(self.board)):
            if not self.column_full(i):
                move = self.play_move(i)
                if move.get_winner() == self.current_turn:
                    return move
        rev_board = Board(self.board, 3 - self.current_turn)
        for i in range(len(rev_board.board)):
            if not rev_board.column_full(i):
                move = rev_board.play_move(i)
                if move.get_winner() == 3 - self.current_turn:
                    b = Board(self.board, self.current_turn)
                    return b.play_move(i)

        for i in range(len(self.board)):
            if not self.column_full(i):
                return self.play_move(i)
    def column_full(self, column):
        return self.board[column][-1] != 0

    def all_full(self):
        for i in range(len(self.board)):
            if not self.column_full(i):
                return False
        return True

    def simulate_all(self):
        b = Board(self.board, self.current_turn)
        while not b.all_full() and not b.get_winner():
            b = b.simulate_one()

        return b

    def display(self):
        for i in range(len(self.board[0])-1, -1, -1):
            for j in range(len(self.board)):
                print("-*o"[self.board[j][i]], end='')
            print()
        print()


if __name__ == "__main__":
    n = int(input())
    a = [int(i) for i in input(f"Please enter {n} numbers: ").split()]

    board = [[0 for _ in range(6)] for _ in range(7)]
    b = Board(board, 1)
    for i in a:
        b = b.play_move(i-1)


    while True:
        b.display()
        winner = b.get_winner()
        if winner:
            print(f"Player {winner} wins!")
            exit(0)
        if b.all_full():
            print("Draw")
            exit(0)
        move = input()
        if move == "n":
            b = b.simulate_one()
        else:
            b = b.simulate_all()
