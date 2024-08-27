def solve(s):
    if len(s) < 2:
        return 1
    answer = 1
    for i in range(len(s)//2+1):
        if s[:i] != s[-i:]:
            continue
        answer += solve(s[i:-i])
    return answer


if __name__ == "__main__":
    s = input("Please enter a word: ")
    print(solve(s)-1)