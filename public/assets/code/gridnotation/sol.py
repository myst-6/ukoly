#Question 1
#(1,1) is U

letterMatrix = [["A", "B", "C", "D", "E"],
              ["F", "G", "H", "I", "J"],
              ["K", "L", "M", "N", "O"],
              ["P", "Q", "R", "S", "T"],
              ["U", "V", "W", "X", "Y"],
              ]

def mainSequence(inputString):
    if "z" in inputString:
        print("Error")
        return
    else:
        nVal = len(inputString)
        coordinates = [1,1] #1 by default because bottom left in this question is (1,1)
        for i in range(0, nVal):
            coordinates[0] += determinePos(inputString[i], nVal-i)[0]
            coordinates[1] += determinePos(inputString[i], nVal-i)[1]
        print(coordinates)
    #Determining The First Section


def determinePos(letter, n): #takes in coordinates
    xCoord = 0
    yCoord = 0
    for row in letterMatrix:
        yCoord += 1
        if letter in row:
            xCoord = row.index(letter)
            
            break
    yCoord = 5-yCoord #So that we count from the bottom instead of the top
    xCoord *= 5**(n-1)
    yCoord *= 5**(n-1)
    return [xCoord, yCoord] 
    print(f"{coordinates[0]} {coordinates[1]}")

userInput = input()
mainSequence(userInput) #AFKPPKFKPK LEFTHAND
