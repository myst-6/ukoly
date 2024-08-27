def is_palindromic(subsets):
    return subsets == subsets[::-1]


if __name__ == "__main__":
    s = input("Please enter a word: ")
    n = len(s) - 1
    answer = 0
    for i in range(1, 2**n):
        bits = []
        for j in range(n):
            if (i >> j) % 2 == 1:
                bits.append(j+1)
        bits = [0] + bits + [n+1]
        intervals = []
        for i in range(1, len(bits)):
            intervals.append(s[bits[i-1]:bits[i]])
        if is_palindromic(intervals):
            answer += 1

    print(answer)