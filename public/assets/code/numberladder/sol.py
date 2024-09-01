from collections import deque


def solve(a, b):
    visited = [False for i in range(1000)]
    visited[a] = True
    queue = deque([(a, 0)])
    while queue:
        curr, dist = queue.popleft()
        if curr == b:
            return dist
        for i in adjlist[curr]:
            if not visited[i]:
                visited[i] = True
                queue.append((i, dist + 1))
    return -1


if __name__ == "__main__":
    digits = ["ZERO", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE"]
    nums = []
    for i in range(1000):
        curr = ""
        a = i
        while a > 0:
            curr += digits[a % 10]
            a //= 10
        nums.append(curr)

    counters = [[0 for i in range(26)] for j in range(1000)]
    for i in range(1000):
        for j in nums[i]:
            counters[i][ord(j) - ord('A')] += 1
    

    adjlist = [[] for i in range(1000)]
    for i in range(1000):
        for j in range(i+1, 1000):
            diff = 0
            for k in range(26):
                diff += abs(counters[i][k] - counters[j][k])
            if diff <= 5:
                adjlist[i].append(j)
                adjlist[j].append(i)
    
    a, b = [int(i) for i in input("Please enter two numbers: ").split()]
    c, d = [int(i) for i in input("Please enter two numbers: ").split()]
    e, f = [int(i) for i in input("Please enter two numbers: ").split()]

    print(solve(a, b))
    print(solve(c, d))
    print(solve(e, f))