inp = input()
curr = list(inp)

colours = {
    ('B', 'G'): 'R',
    ('B', 'R'): 'G',
    ('G', 'R'): 'B'
}

while (len(curr) > 1):
    new = []
    for i in range(0, len(curr)-1):
        c1, c2 = curr[i], curr[i+1]
        if c1 == c2: new.append(c1)
        else: new.append(colours[(min(c1, c2), max(c1, c2))])
    curr = new

print(curr[0])
