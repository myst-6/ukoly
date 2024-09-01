r1 = [0, 3, 1, 2]
r2 = [0, 2, 1, 3]

def rotate(r):
    for i in range(4):
        r[i] = (r[i] + 1) % 4
    r.append(r.pop(0))
    
def getOut(x):
    x = ord(x) - ord('A')
    right = r2[r1[x]]
    r = 3 - right
    return chr(ord('A') + r1.index(r2.index(r)))

rots = int(input())
for _ in range(rots % 4): rotate(r1)
for _ in range((rots // 4) % 4): rotate(r2)

encrypt = input()
out = []
for c in encrypt:
    out.append(getOut(c))
    rotate(r1)
    rots += 1
    if rots % 4 == 0: rotate(r2)
    
print(''.join(out))
