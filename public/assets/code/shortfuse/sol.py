# Solution Author: Adwaya Gupta
def dfs(time, fuseState, timingFrom):
    if timingFrom != -1: times.add(time - timingFrom)
    
    # Burn more fuses at the current time
    for i in range(n):
        if fuseState[i][0] == 0:
            # Burn new fuse from 1 end
            curr = fuseState[:]
            curr[i] = (1, time, time + fuseLengths[i])
            dfs(time, curr, timingFrom)
        
            # Burn new fuse from 2 ends
            curr = fuseState[:]
            curr[i] = (2, time, time + fuseLengths[i] / 2)
            dfs(time, curr, timingFrom)
            
        elif fuseState[i][0] == 1 and fuseState[i][1] != time:
            # Burn already burning fuse from other end
            curr = fuseState[:]
            curr[i] = (2, time, time + (fuseState[i][2] - time) / 2)
            dfs(time, curr, timingFrom)
            
    # Move to the next time
    curr = fuseState[:]
    nxt = min(fuseState, key=lambda x: x[2])[2]
    if nxt == float('inf'): return
    for i in range(n):
        if curr[i][2] == nxt:
            curr[i] = (3, float('inf'), float('inf'))
    dfs(nxt, curr, timingFrom)
    if timingFrom == -1: 
        # If not timing, start timing
        dfs(nxt, curr, time)
            
n = int(input())
fuseLengths = list(map(int, input().split()))
times = set()
dfs(0, [(0, float('inf'), float('inf'))]*n, -1) 
print(len(times) + 1) # Add 1 for time = 0
