def addConnection(r1, r2):
    connections[ord(r1)-ord('A')].append(r2)
    connections[ord(r2)-ord('A')].append(r1)
def makeConnections(plan):
    chosen = ""
    for i in range(len(plan)):
        for room in alphabet:
            if room not in plan and room not in chosen:
                addConnection(room, plan[0])
                plan = plan[1:]
                chosen += room
                break
    remainder = []
    for room in alphabet:
        if room not in chosen:
            remainder.append(room)
    addConnection(remainder[0], remainder[1])

plan, p, q = input().split()
p, q = int(p), int(q)
connections = [[] for i in range(len(plan) + 2)]
alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
alphabet = alphabet[:len(plan)+2]
makeConnections(plan)

for item in connections:
    item.sort()
    print(''.join(item))


visited = [[0 for i in range(len(plan) + 2)] for i in range(len(plan) + 2)]
rVisited = [0 for i in range(len(plan) + 2)]
rVisited[0] = 1
location = 0
nextlocation = 0
def move():
    global location, nextlocation
    if rVisited[location] == 1:
        nextlocation = ord(connections[location][0])-ord('A')
    else:
        for j in range(len(connections[location])):
            possExit = ord(connections[location][j])-ord('A')
            if visited[location][possExit] == 1:
                if j == len(connections[location])-1:
                    nextlocation = possExit
                else:
         
                    nextlocation = ord(connections[location][j+1])-ord('A')
                break

    rVisited[nextlocation]^=1
    visited[location][nextlocation]^=1
    location = nextlocation

for i in range(p):
    move()
print(alphabet[location], end='')

for i in range(q - p):
    move()
print(alphabet[location])
