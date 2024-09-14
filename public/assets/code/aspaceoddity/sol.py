from collections import defaultdict
from queue import PriorityQueue


if __name__ == "__main__":
    n = int(input())
    times = [int(i) for i in input().strip().split()]

    q = PriorityQueue()
    q.put((0, tuple([False] * (n + 1))))
    graph = defaultdict(lambda: [float("inf"), float("inf")])
    graph[tuple([False] * (n + 1))] = [0, []]
    while not q.empty():
        distance, state = q.get()
        state = list(state)
        for pointer in range(n):  # changing 1 thing at a time
            if state[pointer] != state[-1]:  # oxygen
                continue
            new_state = state[:]
            new_state[pointer] = not new_state[pointer]
            new_state[-1] = not new_state[-1]
            new_distance = distance + times[pointer]

            if graph[tuple(new_state)][0] > new_distance:
                graph[tuple(new_state)] = [new_distance, state[:]]
                q.put((new_distance, tuple(new_state)))

        for pointer1 in range(n):
            for pointer2 in range(pointer1 + 1, n):
                if not (state[pointer1] == state[pointer2] == state[-1]):  # oxygen
                    continue

                new_state = state[:]
                new_state[pointer1] = not new_state[pointer1]
                new_state[pointer2] = not new_state[pointer2]
                new_state[-1] = not new_state[-1]
                new_distance = distance + max(times[pointer1], times[pointer2])
                if graph[tuple(new_state)][0] > new_distance:
                    graph[tuple(new_state)] = [new_distance, state[:]]
                    q.put((new_distance, tuple(new_state)))

    print(graph[tuple([True] * (n + 1))][0])  # part 3a