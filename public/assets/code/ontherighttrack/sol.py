class Stop:
    def __init__(self, leftSwitch=None, rightSwitch=None, straightSwitch=None, lazy=None):
        self.leftSwitch = leftSwitch
        self.rightSwitch = rightSwitch
        self.straightSwitch = straightSwitch
        self.currSwitch = leftSwitch
        self.lazy = lazy

    def nxt(self, from_switch):
        if self.lazy:
            if from_switch == self.straightSwitch:
                return self.currSwitch
            else:
                self.currSwitch = from_switch
                return self.straightSwitch
        else:
            if from_switch == self.straightSwitch:
                tmpSwitch = self.currSwitch
                if self.currSwitch == self.leftSwitch:
                    self.currSwitch = self.rightSwitch
                else:
                    self.currSwitch = self.leftSwitch
                return tmpSwitch
            else:
                return self.straightSwitch


flip_flop = input().strip()
start = input().strip()
n = int(input().strip())

#construct board
is_flip_flop = set(flip_flop)

layer0 = "ABCD"
layer1 = "EFGHIJKL"
layer2 = "MNOPQRST"
layer3 = "UVWX"

board = {}
board['A'] = Stop('E', 'F', 'D', 'A' not in is_flip_flop)
board['B'] = Stop('G', 'H', 'C', 'B' not in is_flip_flop)
board['C'] = Stop('I', 'J', 'B', 'C' not in is_flip_flop)
board['D'] = Stop('K', 'L', 'A', 'D' not in is_flip_flop)

for i in range(8):
    board[layer1[i]] = Stop(layer2[i], layer2[(i + 1) % 8], layer0[i // 2], layer1[i] not in is_flip_flop)
    board[layer2[i]] = Stop(layer1[(i + 7) % 8], layer1[i], layer3[i // 2], layer2[i] not in is_flip_flop)

board['U'] = Stop('M', 'N', 'V', 'U' not in is_flip_flop)
board['V'] = Stop('O', 'P', 'U', 'V' not in is_flip_flop)
board['W'] = Stop('Q', 'R', 'X', 'W' not in is_flip_flop)
board['X'] = Stop('S', 'T', 'W', 'X' not in is_flip_flop)

#run train
curr, to = start[0], start[1]
for _ in range(n):
    tmp = board[to].nxt(curr)
    curr, to = to, tmp
print(curr + to)

