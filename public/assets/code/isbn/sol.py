s = input() 
idx = s.index('?')
multiplier = 10 - idx 
total = 0 
for (i, v) in enumerate(s): 
    if v != '?': 
        if v == 'X': 
            val = 10
        else:
            val = int(v)
        total += (10 - i) * val

for i in range(10 + (idx==9)):
    if (total + i * multiplier) % 11 == 0:
        print('X' if i==10 else i)
        break