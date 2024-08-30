# Solution Author: Adwaya Gupta
ans = 0
n = int(input())
words = int(input())
for i in range(1, n+1):
    ans = (ans + words) % i
    i += 1
print(ans + 1)
