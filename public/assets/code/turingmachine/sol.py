# Solution Author: Adwaya Gupta
from collections import defaultdict

tape = defaultdict(int)
pos = 0
currstate = 1

states = int(input())
instructions = [None] + [input().split() for _ in range(states)]
m = int(input())


for i in range(m):
    if currstate == 0:
        print(''.join(str(tape[i]) for i in range(pos-3, pos+4)))
        print(i)
        quit()

    w, d, t = instructions[currstate][tape[pos]]
    w, t = int(w), int(t)
    tape[pos] = w
    if d == 'R':
        pos += 1
    else:
        pos -= 1
    currstate = t
    
print(''.join(str(tape[i]) for i in range(pos-3, pos+4)))
print(m)
