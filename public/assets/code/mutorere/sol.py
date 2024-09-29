# Solution author: Alex Pylypenko
def right(x):
    return x % 8 + 1


def left(x):
    return (x-2) % 8 + 1


class Board:
    def __init__(self, chars, current_turn=1):
        self.chars = chars
        self.current_turn = current_turn


    def generate_candidates(self):
        """
        O can swap with E if
           1. O is chars[0]
           2. O and E are adjacent
           3. E is at position 0, and not (chars[pos-1] = chars[pos] = chars[pos+1]
        """
        on_turn = "O" if self.current_turn == 1 else "X"
        empty_index = self.chars.index("E")
        candidates = []
        for i in range(9):
            if self.chars[i] != on_turn:
                continue
            if i != 0 and self.chars[left(i)] == self.chars[i] == self.chars[right(i)]:
                continue
            if i != 0 and empty_index != 0 and empty_index != left(i) and empty_index != right(i):
                continue
            candidates.append(i)

        return candidates

    def make_move(self, depth=2):
        cands = self.generate_candidates()
        empty_index = self.chars.index("E")
        for cand in cands:
            new_string = list(self.chars)
            new_string[empty_index], new_string[cand] = new_string[cand], new_string[empty_index]
            new_string = "".join(new_string)
            neighbour = Board(new_string, 3-self.current_turn)
            if neighbour.check_winner() == self.current_turn:
                return new_string, self.current_turn

        if depth == 1:
            cand = cands[0]
            new_string = list(self.chars)
            new_string[empty_index], new_string[cand] = new_string[cand], new_string[empty_index]
            new_string = "".join(new_string)
            return new_string, 0
        else:
            for cand in cands:
                new_string = list(self.chars)
                new_string[empty_index], new_string[cand] = new_string[cand], new_string[empty_index]
                new_string = "".join(new_string)
                neighbour = Board(new_string, 3 - self.current_turn)
                state, winner = neighbour.make_move(depth-1)
                if winner == 0:
                    return new_string, 0

            cand = cands[0]
            new_string = list(self.chars)
            new_string[empty_index], new_string[cand] = new_string[cand], new_string[empty_index]
            new_string = "".join(new_string)
            return new_string, 0

    def check_winner(self):
        cands = self.generate_candidates()
        if len(cands) == 0:
            return 3 - self.current_turn
        return 0

    def simulate(self):
        visited = set()
        curr_state = Board(self.chars, self.current_turn)

        while True:
            repr = str(curr_state.current_turn) + curr_state.chars
            if repr in visited:
                return None, 0
            visited.add(repr)
            if winner := curr_state.check_winner():
                return curr_state.chars, winner

            new_state, _ = curr_state.make_move()
            curr_state = Board(new_state, 3-curr_state.current_turn)

    def __repr__(self):
        return f"{self.chars}, current turn {self.current_turn}"


if __name__ == "__main__":
    s = input()
    b = Board(s)

    while True:
        command = input()
        if command == "r":
            if x := b.check_winner():
                print(f"Player {x} wins")
                break
            state, winner = b.simulate()
            if winner == 0:
                print("Draw")
            else:
                print(state)
                print(f"Player {winner} wins")
            break
        elif command == "n":
            if x := b.check_winner():
                print(b.chars)
                print(f"Player {x} wins")
                break
            state, winner = b.make_move()
            print(state)
            if winner:
                print(f"Player {winner} wins")
                break
            b = Board(state, 3-b.current_turn)

