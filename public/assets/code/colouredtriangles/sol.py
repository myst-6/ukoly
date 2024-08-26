inp = input()
curr = list(inp)

while (len(curr) > 1):
    new = []
    for i in range(0, len(curr)-1):
        c1, c2 = curr[i], curr[i+1]
        if c1 == c2: new.append(c1)
        else: new.append(list({c1, c2}^{"R", "G", "B"})[0])
    curr = new

print(curr[0])
