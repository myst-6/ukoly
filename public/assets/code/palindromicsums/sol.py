# Solution Author: Adwaya Gupta
palindromes = []
for i in range(1, 1000000):
    if str(i) == str(i)[::-1]:
        palindromes.append(i)
palindromeSet = set(palindromes)

n = int(input())

if n in palindromeSet:
    print(n)
    quit()
    
for i in palindromes:
    if n - i in palindromeSet:
        print(i, n-i)
        quit()

for i in palindromes:
    for j in palindromes:
        if n - i - j in palindromeSet:
            print(i, j, n-i-j)
            quit()
            
