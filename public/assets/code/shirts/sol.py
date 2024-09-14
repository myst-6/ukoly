import collections


if __name__ == "__main__":
    operations = [
        lambda x: x[1:4] + x[0] + x[4:],
        lambda x: x[:3] + x[6] + x[3:6],
        lambda x: x[3] + x[:3] + x[4:],
        lambda x: x[:3] + x[4:] + x[3]
    ]
    a = input()
    seen = set()
    q = collections.deque([(0, a)])

    while q:
        depth, value = q.popleft()
        if value == "1234567":
            print(depth)
            exit(0)
        if value in seen:
            continue
        seen.add(value)
        for op in operations:
            q.append((depth + 1, op(value)))
