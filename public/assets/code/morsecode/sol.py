# Solution Author: Adwaya Gupta
from functools import lru_cache

morse = ['.-', '-...', '-.-.', '-..', '.', 
         '..-.', '--.', '....', '..', '.---', 
         '-.-', '.-..', '--', '-.', '---', 
         '.--.', '--.-', '.-.', '...', '-', 
         '..-', '...-', '.--', '-..-', '-.--', 
         '--..']

def toMorse(s):
    return morse[ord(s)-ord('a')]

@lru_cache(maxsize=None)
def solve(s, i, depth, maxDepth):
    if depth > maxDepth: return 0
    if len(s)-i < 0: return 0
    if len(s)-i == 0: 
        return depth == maxDepth    
    
    ans = 0
    for j in range(1, min(4, len(s)-i)+1):
        if s[i:i+j] in morse: 
            ans += solve(s, i+j, depth+1, maxDepth)
    return ans

word = input()
encrypt = ''
for c in word:
    encrypt += toMorse(c)

print(solve(encrypt, 0, 0, len(word))) 
