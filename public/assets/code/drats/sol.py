if __name__ == "__main__":
    dp = [[0 for _ in range(1000)] for _ in range(9)]
    s, d = [int(i) for i in input("Please enter two numbers: ").split()]

    for i in range(1, 21):
        dp[1][2 * i] = 1

    for score in range(1, s + 1):
        for darts in range(2, d + 1):
            for last_dart in range(1, 21):
                if score - last_dart < 0:
                    break
                dp[darts][score] += dp[darts - 1][score - last_dart]

    print(dp[d][s])