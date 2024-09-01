if __name__ == "__main__":
    nums = [int(x) for x in input("Please enter 5 numbers: ").split()]
    score = 0
    for i in range(5):
        for j in range(i+1, 5):
            if nums[i] == nums[j]:
                score += 1

    for i in range(32):
        s = 0
        for j in range(5):
            if (i >> j) & 1:
                s += nums[j]
        if s == 15:
            score += 1

    print(score)