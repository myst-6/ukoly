import collections


def solve(volumes, n):
    q = collections.deque([(0, volumes)])
    seen = {tuple(volumes)}

    while q:
        steps, outcome = q.popleft()
        if n in outcome:
            return steps

        for i in range(len(volumes)):
            new_outcome = outcome[:]
            new_outcome[i] = capacities[i]
            if tuple(new_outcome) not in seen:
                seen.add(tuple(new_outcome))
                q.append((steps + 1, new_outcome[:]))
            new_outcome[i] = 0
            if tuple(new_outcome) not in seen:
                seen.add(tuple(new_outcome))
                q.append((steps + 1, new_outcome[:]))

        for i in range(len(volumes)):
            for j in range(i, len(volumes)):
                #  pour i to j
                new_outcome = outcome[:]
                amount_to_pour = min(capacities[j] - outcome[j], outcome[i])
                new_outcome[j] += amount_to_pour
                new_outcome[i] -= amount_to_pour
                if tuple(new_outcome) not in seen:
                    seen.add(tuple(new_outcome))
                    q.append((steps + 1, new_outcome[:]))

                # pour j to i
                new_outcome = outcome[:]
                amount_to_pour = min(capacities[i] - outcome[i], outcome[j])
                new_outcome[i] += amount_to_pour
                new_outcome[j] -= amount_to_pour
                if tuple(new_outcome) not in seen:
                    seen.add(tuple(new_outcome))
                    q.append((steps + 1, new_outcome[:]))


if __name__ == "__main__":
    j, n = [int(i) for i in input().split()]
    capacities = [int(i) for i in input(f"Please enter jug volumes: ").split()]
    volumes = [0 for _ in capacities]
    print(solve(volumes, n))