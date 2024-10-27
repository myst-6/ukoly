# Solution author: Alex Pylypenko

from collections import deque


def solve(start, end):
    start_state = start.split()
    end_state = end.split()
    if start_state == end_state:
        return 0
    start_state = [list(i) for i in start_state]
    end_state = [list(i) for i in end_state]

    for i in range(4):
        if start_state[i] == ['0']:
            start_state[i] = []
        if end_state[i] == ['0']:
            end_state[i] = []

    q = deque([(0, tuple(tuple(i) for i in start_state))])
    seen = set()
    while q:
        distance, state = q.popleft()
        if state in seen:
            continue
        seen.add(state)
        for old in range(4):
            if not state[old]:
                continue
            new_state = [list(i) for i in state]
            element = new_state[old].pop()
            for new in range(4):
                if new == old:
                    continue
                ns = new_state[:][:]
                ns[new].append(element)
                if ns == end_state:
                    return distance + 1
                q.append((distance + 1, tuple(tuple(i) for i in ns)))
                ns[new].pop()


if __name__ == "__main__":
    a = input()
    b = input()
    print(solve(a, b))