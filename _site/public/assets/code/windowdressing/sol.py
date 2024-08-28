from collections import deque
from string import ascii_uppercase


def add(s):
    return s + ascii_uppercase[len(s)]

def swap(s):
    return s[1] + s[0] + s[2:]

def rotate(s):
    return s[1:] + s[0]


def solve(s: str) -> int:
    bfs = deque([("", 0)])
    visited = {""}
    while bfs:
        current, steps = bfs.popleft()
        if current == s:
            return steps
        if len(current) < len(s):
            new_string = add(current)
            if new_string not in visited:
                visited.add(new_string)
                bfs.append((new_string, steps + 1))
        if len(current) > 1:
            for new_string in [swap(current), rotate(current)]:
                if new_string not in visited:
                    visited.add(new_string)
                    bfs.append((new_string, steps + 1))


if __name__ == "__main__":
    s = input()
    print(solve(s))