# Solution Author: Adwaya Gupta
def solve(n, words):
    if n == 1: return 0
    return (solve(n-1, words) + words) % n
print(solve(int(input()), int(input())) + 1)
