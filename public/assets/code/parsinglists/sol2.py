# Solution Author: Adwaya Gupta
from math import sqrt

s, n = input().split()
n = int(n)

# Add brackets and stars
s = s.replace('E', '*E()*').replace('O', '*O()*').replace('T', '*T()*')
# Clean up
s = s.replace('**', '*').replace('(*', '(').replace('*)', ')').replace(')(', ')*(')
s = s.strip('*')

# Classes to store tokens
class Tokens:
    def __init__(self, tokens): self.tokens = tokens
    def __mul__(self, other): return Tokens(other.tokens + self.tokens + other.tokens)

class E(Tokens):
    def __init__(self): self.tokens = ['E']
class O(Tokens): 
    def __init__(self): self.tokens = ['O']
class T(Tokens):
    def __init__(self): self.tokens = ['T']

# Parse Expression
for i in eval(s).tokens[::-1]:
    if i == 'E': n = n * 2
    if i == 'O': n = n * 2 - 1
    if i == 'T': n = int(sqrt(2 * n) + 0.5)
print(n)
