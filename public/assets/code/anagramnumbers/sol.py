if __name__ == "__main__":
    num = int(input())
    digits = sorted(list(str(num)))
    answers = []
    for i in range(2, 10):
        num2 = num * i
        digits2 = sorted(list(str(num2)))
        if digits == digits2:
            answers.append(i)

    if answers:
        print(" ".join(map(str, answers)))
    else:
        print("NO")