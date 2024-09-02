from functools import cache

scene_nums = []
n = 0


@cache
def solve(scenes_shot):
    scenes_shot = list(scenes_shot)
    if scenes_shot == scene_nums:
        return 1

    for i in range(n - 1):
        if scenes_shot[i] < scenes_shot[i + 1]:
            return 0
        if scenes_shot[i] > scene_nums[i]:
            return 0

    total = 0
    for i in range(n):
        scenes_shot[i] += 1
        total += solve(tuple(scenes_shot))
        scenes_shot[i] -= 1

    return total


if __name__ == "__main__":
    n = int(input())
    scene_nums = [int(i) for i in input().strip().split()]

    print(solve(tuple([0] * n)))
