# Solution author: Adwaya Gupta

from string import ascii_uppercase as a

n, encrypted = input().split()
n = int(n)

alpha = list(a)
dial2 = []
last = 0
while alpha:
    last = (last + n-1) % len(alpha)
    dial2.append(alpha.pop(last))

print(''.join(dial2[:6]))

decrypt = ""
for char in encrypted:
    decrypt += dial2[a.index(char)]
    dial2 += dial2.pop(0)
print(decrypt)