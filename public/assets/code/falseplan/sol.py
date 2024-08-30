#Solution Author: yuvan raja
ALPHABET = "ABCDEFGHIJKLMNOPQRSTU"
def f(lettersLeft, prevCount):
    if prevCount > q:
        return 0
    if lettersLeft == 0:
        return 1
    if dp[lettersLeft][prevCount]!=-1:
        return dp[lettersLeft][prevCount]
    
    if prevCount!=q:
        numBranch = f(lettersLeft - 1, prevCount + 1)
    else:
        numBranch = 0

    numBranch += (p-1)*f(lettersLeft - 1, 1)
    dp[lettersLeft][prevCount] = numBranch
    return numBranch


def walkTree(n):
    curr = 0
    stri = "."
    lettersLeft = r - 1
    prevCount = 0
    
    while(lettersLeft >= 0):
        done = False
        while not done:
            for letter in alphab:
                if letter == stri[-1]:
                    nextprevCount = prevCount + 1
                else:
                    nextprevCount = 1
                curr += f(lettersLeft, nextprevCount)
                if curr >= n:
                    curr -= f(lettersLeft, nextprevCount)
                    prevCount = nextprevCount
                    done = True
                    stri += letter
                    break
        
        lettersLeft -= 1
    print(stri[1:])

p, q, r = map(int, input().split())

n = int(input())
dp = [[-1 for i in range(q+1)] for i in range(r+1)]

alphab = ALPHABET[:p]
walkTree(n)
        
    
    
