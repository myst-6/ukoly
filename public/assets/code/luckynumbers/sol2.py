# Solution Author: Adwaya Gupta
import bisect

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
r = bisect.bisect_right(lucky, n)
print(lucky[(r-2) if lucky[r-1]==n else (r-1)], lucky[r])
