if __name__ == "__main__":
    isbn = list(input("ISBN: "))
    if isbn[9] == "X":
        isbn[9] = "10"
    questionmark = isbn.index("?")
    for i in range(10):
        isbn[questionmark] = str(i)
        if sum([int(isbn[i]) * (10 - i) for i in range(10)]) % 11 == 0:
            print(f"Missing digit: {i}")
            break
