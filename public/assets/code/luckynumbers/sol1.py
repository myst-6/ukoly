# Solution Author: Adwaya Gupta
lucky = list(range(1, 10100, 2))

i = 3
ind = 1
while i < len(lucky):
    j = i-1
    while j < len(lucky):
        lucky.pop(j)
        j += i - 1
    ind += 1
    i = lucky[ind]

n = int(input())
for i in range(len(lucky)):
    if lucky[i] > n:
        if lucky[i-1] == n:
            print(lucky[i-2], end=' ')
        else:
            print(lucky[i-1], end=' ')
        print(lucky[i])
        break
