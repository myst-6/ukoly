# Solution author: Vladimir Filip
def getLargestFibonacci(n):
    #
    # Returns the largest Fibonacci number lower than or equal to n
    #
    if n == 1:
        return 1
    if n == 2:
        return 2
    a, b = 1, 2
    while (b <= n):
        a, b = b, a + b
        return a

nums = []
n = int(input())
while (n > 0):
    nums.append(getLargestFibonacci(n))
    n -= nums[-1]

print(*nums)