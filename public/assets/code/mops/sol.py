# Solution Author: Adwaya Gupta
def getFactors(n):
    factors = set()
    for i in range(2, int(n**0.5)+1):
        if n % i == 0:
            factors.add(i)
            factors.add(n//i)
    return factors

n = int(input())
moplen = [float('inf')]*(n+1)
moplen[0] = 0

for i in range(1, n+1):
    moplen[i] = min(moplen[i], moplen[i-1]+1)
    for f in getFactors(i):
        moplen[i] = min(moplen[i], moplen[i//f]+moplen[f])
print(moplen[-1])
        
