#solution author: yuvan raja
def palindromify(half, n):
    if n%2 == 0:
        return half + half[::-1]
    else:
        return half + half[-2::-1]

def firstHalf(inString):
    return inString[:(len(inString)+1)//2]


x = input()
front = firstHalf(x)
out1 = palindromify(front, len(x))

if int(out1) > int(x):
    print(out1)
else:
    front2 = str(int(front) + 1)
    
    #99999 case
    if len(front2) > len(front):
        print(int(x) + 2)

    #palindromify the increased front
    else:
        out2 = palindromify(front2, len(x))
        print(out2)
        
    

